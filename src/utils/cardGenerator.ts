export type CardData = {
    id: string;
    name: string;
}

export const generateDataArray = (sliderValue: number): CardData[] => {
    return Array.from({ length: sliderValue }, (_, i) => ({ id: String(i + 1), name: `Card ${i + 1}` }));
}