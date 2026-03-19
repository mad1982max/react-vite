export const MAX_SLIDER_VALUE = 100;

export const stylesDefault = {
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

export const stylesCustom = {
    width: '150px',
    color: 'success.dark',
    "& .MuiSlider-thumb": {
        backgroundColor: 'red',
        ":hover": { backgroundColor: 'orange' },
        ":active": { backgroundColor: 'red' },
        ":focus": { backgroundColor: 'pink' },
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