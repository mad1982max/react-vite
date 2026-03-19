export const generateDataArray = (sliderValue: number) => {
    return Array.from({ length: sliderValue }, (_, i) => `id:${i + 1}`);
}