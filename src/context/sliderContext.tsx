import { createContext } from "react";
import type { CardData } from "../utils/cardGenerator";

interface ContextState {
    sliderValue: number;
    isSliderDisabled: boolean;
    list: CardData[];
}

interface ContextActions {
    setSliderValue: (value: number) => void;
    setIsSliderDisabled: (value: boolean) => void;
    deleteCardById: (id: string) => void;
}

export const initialContextState: ContextState = {
    sliderValue: 25,
    isSliderDisabled: false,
    list: [],
}

export const AppContext = createContext<ContextState & ContextActions>({
    ...initialContextState,
    setSliderValue: () => { },
    setIsSliderDisabled: () => { },
    deleteCardById: () => { },
});




