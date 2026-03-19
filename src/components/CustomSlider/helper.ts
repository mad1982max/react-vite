export const MAX_SLIDER_VALUE = 100;

export const STYLE_DEFAULT = {
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
}

export const getStyledSliderStyles = (customType: 'error' | 'success') => {
    return {
        width: '150px',
        color: 'success.dark',
        "& .MuiSlider-thumb": {
            backgroundColor: 'red',
            ":hover": { backgroundColor: customType === 'error' ? 'orange' : 'green' },
            ":active": { backgroundColor: customType === 'error' ? 'red' : 'green' },
            ":focus": { backgroundColor: customType === 'error' ? 'red' : 'green' },
        },
        "&.Mui-disabled": {
            "& .MuiSlider-thumb": {
                backgroundColor: 'orange',
            },
            "& .MuiSlider-track": {
                backgroundColor: 'orange',
            },
            "& .MuiSlider-rail": {
                backgroundColor: 'orange',
            },
        }
    }
}