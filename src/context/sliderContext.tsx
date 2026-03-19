import { createContext } from "react";

interface ContextState {
    sliderValue: number;
    isSliderDisabled: boolean;
}

interface ContextActions {
    setSliderValue: (value: number) => void;
    setIsSliderDisabled: (value: boolean) => void;
}

export const initialContextState: ContextState = {
    sliderValue: 0,
    isSliderDisabled: false,
}

export const AppContext = createContext<ContextState & ContextActions>({
    ...initialContextState,
    setSliderValue: () => { },
    setIsSliderDisabled: () => { },
});




