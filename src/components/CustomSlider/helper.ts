export const MAX_SLIDER_VALUE = 100;

export type CustomType = 'error' | 'success';

type SliderStateColors = {
    hover: string;
    active: string;
    focus: string;
    disabled: string;
};

const thumbColors: Record<CustomType, SliderStateColors> = {
    error: { hover: 'orange', active: 'red', focus: 'red', disabled: 'orange' },
    success: { hover: 'green', active: 'red', focus: 'pink', disabled: 'pink' },
};

export const getStyledSliderStyles = (customType: CustomType) => {
    const state = thumbColors[customType];

    return {
        width: '150px',
        color: 'success.dark',
        "& .MuiSlider-thumb": {
            backgroundColor: 'red',
            ":hover": { backgroundColor: state.hover },
            ":active": { backgroundColor: state.active },
            ":focus": { backgroundColor: state.focus },
        },
        "&.Mui-disabled": {
            "& .MuiSlider-thumb": {
                backgroundColor: state.disabled,
            },
            "& .MuiSlider-track": {
                backgroundColor: state.disabled,
            },
            "& .MuiSlider-rail": {
                backgroundColor: state.disabled,
            },
        }
    };
};

export const STYLE_DEFAULT = getStyledSliderStyles('success');