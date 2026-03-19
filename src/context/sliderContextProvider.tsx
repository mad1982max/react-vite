import { useState } from "react";
import { AppContext, initialContextState } from "./sliderContext";

export const AppSliderProvider = ({ children }: { children: React.ReactNode }) => {

    const [sliderValue, setSliderValue] = useState(initialContextState.sliderValue);
    const [isSliderDisabled, setIsSliderDisabled] = useState(initialContextState.isSliderDisabled);

    return <AppContext.Provider value={{ sliderValue, setSliderValue, isSliderDisabled, setIsSliderDisabled }}>
        {children}
    </AppContext.Provider>
}