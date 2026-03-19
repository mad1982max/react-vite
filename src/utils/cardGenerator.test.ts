import { describe, it, expect } from 'vitest';
import { generateDataArray } from './cardGenerator';

describe('generateDataArray', () => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    it('returns one item for sliderValue = 1', () => {
        const result = generateDataArray(1);

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Card 1');
        expect(result[0].id).toMatch(uuidRegex);
    });

    it('returns sequential card names for sliderValue = 5', () => {
        const result = generateDataArray(5);

        expect(result.map((item) => item.name)).toEqual([
            'Card 1',
            'Card 2',
            'Card 3',
            'Card 4',
            'Card 5'
        ]);

        expect(result.every((item) => uuidRegex.test(item.id))).toBe(true);
        expect(new Set(result.map((item) => item.id)).size).toBe(5);
    });

    it('returns empty array for sliderValue = 0', () => {
        expect(generateDataArray(0)).toEqual([]);
    });

    it('returns empty array for negative sliderValue', () => {
        expect(generateDataArray(-2)).toEqual([]);
    });

    it('truncates decimal sliderValue (3.9 -> 3 items)', () => {
        const result = generateDataArray(3.9);

        expect(result.map((item) => item.name)).toEqual([
            'Card 1',
            'Card 2',
            'Card 3'
        ]);

        expect(result.every((item) => uuidRegex.test(item.id))).toBe(true);
    });

    it('returns empty array for NaN sliderValue', () => {
        expect(generateDataArray(Number.NaN)).toEqual([]);
    });
});