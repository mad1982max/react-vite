import { describe, expect, it } from "vitest";
import { getStyledSliderStyles, STYLE_DEFAULT } from "./helper";

describe("getStyledSliderStyles", () => {
    it("returns success styles", () => {
        const styles = getStyledSliderStyles("success");

        expect(styles["& .MuiSlider-thumb"][":hover"]).toEqual({ backgroundColor: "green" });
        expect(styles["& .MuiSlider-thumb"][":active"]).toEqual({ backgroundColor: "red" });
        expect(styles["& .MuiSlider-thumb"][":focus"]).toEqual({ backgroundColor: "pink" });

        expect(styles["&.Mui-disabled"]["& .MuiSlider-thumb"]).toEqual({ backgroundColor: "pink" });
        expect(styles["&.Mui-disabled"]["& .MuiSlider-track"]).toEqual({ backgroundColor: "pink" });
        expect(styles["&.Mui-disabled"]["& .MuiSlider-rail"]).toEqual({ backgroundColor: "pink" });
    });

    it("returns error styles", () => {
        const styles = getStyledSliderStyles("error");

        expect(styles["& .MuiSlider-thumb"][":hover"]).toEqual({ backgroundColor: "orange" });
        expect(styles["& .MuiSlider-thumb"][":active"]).toEqual({ backgroundColor: "red" });
        expect(styles["& .MuiSlider-thumb"][":focus"]).toEqual({ backgroundColor: "red" });

        expect(styles["&.Mui-disabled"]["& .MuiSlider-thumb"]).toEqual({ backgroundColor: "orange" });
        expect(styles["&.Mui-disabled"]["& .MuiSlider-track"]).toEqual({ backgroundColor: "orange" });
        expect(styles["&.Mui-disabled"]["& .MuiSlider-rail"]).toEqual({ backgroundColor: "orange" });
    });

    it("STYLE_DEFAULT matches success variant", () => {
        expect(STYLE_DEFAULT).toEqual(getStyledSliderStyles("success"));
    });
});