

export type CardData = {
    id: string;
    name: string;
}

export const generateDataArray = (sliderValue: number, from: number = 1): CardData[] => {
    return Array.from({ length: sliderValue }, (_, i) => ({ id: crypto.randomUUID(), name: `Card ${i + from}` }));
}