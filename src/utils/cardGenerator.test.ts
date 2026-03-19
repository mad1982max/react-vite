import { describe, it, expect } from 'vitest';
import { generateDataArray } from './cardGenerator';

describe('generateDataArray', () => {
    it('returns one item for sliderValue = 1', () => {
        expect(generateDataArray(1)).toEqual(['id:1']);
    });

    it('returns sequential ids for sliderValue = 5', () => {
        expect(generateDataArray(5)).toEqual(['id:1', 'id:2', 'id:3', 'id:4', 'id:5']);
    });

    it('returns empty array for sliderValue = 0', () => {
        expect(generateDataArray(0)).toEqual([]);
    });

    it('returns empty array for negative sliderValue', () => {
        expect(generateDataArray(-2)).toEqual([]);
    });

    it('truncates decimal sliderValue (3.9 -> 3 items)', () => {
        expect(generateDataArray(3.9)).toEqual(['id:1', 'id:2', 'id:3']);
    });

    it('returns empty array for NaN sliderValue', () => {
        expect(generateDataArray(Number.NaN)).toEqual([]);
    });
});