import { Button, Slider, Stack, Typography } from "@mui/material";
import { use } from "react";
import { AppContext } from "../../context/sliderContext";
import { MAX_SLIDER_VALUE, getStyledSliderStyles, STYLE_DEFAULT } from "./helper";
import { type SliderProps } from "@mui/material/Slider";
import styled from "@emotion/styled";

type CustomType = 'error' | 'success';

type CustomSliderProps = SliderProps & {
    customType?: CustomType;
}

const StyledSlider = styled(
    Slider,
    { shouldForwardProp: (prop) => prop !== 'customType' }
)<CustomSliderProps>(({ customType = 'success' }) =>
    getStyledSliderStyles(customType)
);

export const CustomSlider = () => {
    const { sliderValue, setSliderValue, isSliderDisabled, setIsSliderDisabled } = use(AppContext);

    return (
        <Stack spacing={2} alignItems="center">
            <Button
                variant="contained"
                color="primary"
                onClick={() => setIsSliderDisabled(!isSliderDisabled)}
            >
                {isSliderDisabled ? "Enable Slider" : "Disable Slider"}
            </Button>

            <Typography variant="body1">
                {`The slider value is: ${sliderValue}`}
            </Typography>

            <Stack spacing={2} direction="row" alignItems="center">
                <Slider
                    disabled={isSliderDisabled}
                    sx={STYLE_DEFAULT}
                    value={sliderValue}
                    max={MAX_SLIDER_VALUE}
                    onChange={(_e: Event, newValue: number | number[]) =>
                        setSliderValue(newValue as number)
                    }
                />
                <StyledSlider
                    customType='error'
                    disabled={isSliderDisabled}
                    value={sliderValue}
                    max={MAX_SLIDER_VALUE}
                    onChange={(_e: Event, newValue: number | number[]) =>
                        setSliderValue(newValue as number)
                    }
                />
            </Stack>
        </Stack>
    );
};