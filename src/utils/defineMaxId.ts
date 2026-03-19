import type { CardData } from "./cardGenerator";

export const defineMaxId = (list: CardData[]): number => {

    const dataArray = list.map(item => {
        const idNumber = item.name.split(" ")[1] || "0";
        return parseInt(idNumber, 10);
    });
    return Math.max(...dataArray, 0);
}