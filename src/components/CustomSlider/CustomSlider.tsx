import { Button, Slider, Stack, Typography } from "@mui/material";
import { use } from "react";
import { AppContext } from "../../context/sliderContext";

export const CustomSlider = () => {
    const { sliderValue, setSliderValue, isSliderDisabled, setIsSliderDisabled } = use(AppContext);

    return <Stack spacing={2} alignItems="center">
        <Button variant="contained" color="primary" onClick={() => {
            setIsSliderDisabled(!isSliderDisabled);
        }}>
            {isSliderDisabled ? 'Enable Slider' : 'Disable Slider'}
        </Button>
        <Typography variant="body1">
            {`The slider value is: ${sliderValue}`}
        </Typography>
        <Slider disabled={isSliderDisabled} sx={{
            width: '150px',
            color: 'success.dark',
            "& .MuiSlider-thumb": {
                backgroundColor: 'red',
                ":hover": { backgroundColor: 'green' },
                ":active": { backgroundColor: 'red' },
                ":focus": { backgroundColor: 'pink' },
            },
            "&.Mui-disabled": {
                "& .MuiSlider-thumb": {
                    backgroundColor: 'pink',
                },
                "& .MuiSlider-track": {
                    backgroundColor: 'pink',
                },
                "& .MuiSlider-rail": {
                    backgroundColor: 'pink',
                },
            }
        }} value={sliderValue} max={100} onChange={(_e: Event, newValue: number | number[]) => setSliderValue(newValue as number)} />
    </Stack>
}