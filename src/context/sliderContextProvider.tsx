import { useState } from "react";
import { AppContext, initialContextState } from "./sliderContext";
import { generateDataArray } from "../utils/cardGenerator";
import { defineMaxId } from "../utils/defineMaxId";

export const AppSliderProvider = ({ children }: { children: React.ReactNode }) => {

    const [sliderValue, setSliderValueState] = useState(initialContextState.sliderValue);
    const [isSliderDisabled, setIsSliderDisabled] = useState(initialContextState.isSliderDisabled);
    const [list, setList] = useState(generateDataArray(initialContextState.sliderValue));

    const setSliderValue = (value: number) => {
        setSliderValueState(value);
        setList((prevList) => {
            if (value > prevList.length) {
                const cardsToAdd = value - prevList.length;
                const maxId = defineMaxId(prevList);
                const newCards = generateDataArray(cardsToAdd, maxId + 1);
                return [...prevList, ...newCards];
            }

            return prevList.slice(0, value);
        });
    };

    const deleteCardById = (id: string) => {
        setList((prevList) => prevList.filter((item) => item.id !== id));
        setSliderValueState((prevValue) => Math.max(prevValue - 1, 0));
        setIsSliderDisabled(true);
    };

    return <AppContext.Provider value={{ sliderValue, setSliderValue, isSliderDisabled, setIsSliderDisabled, list, deleteCardById }}>
        {children}
    </AppContext.Provider>
}