import { Button, Slider, Stack, Typography } from "@mui/material";
import { use } from "react";
import { AppContext } from "../../context/sliderContext";
import { MAX_SLIDER_VALUE, stylesCustom, stylesDefault } from "./helper";
import styled from "@emotion/styled";

const StyledSlider = styled(Slider)(stylesCustom);

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
                    sx={stylesDefault}
                    value={sliderValue}
                    max={MAX_SLIDER_VALUE}
                    onChange={(_e: Event, newValue: number | number[]) =>
                        setSliderValue(newValue as number)
                    }
                />
                <StyledSlider
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