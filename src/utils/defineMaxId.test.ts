import { describe, it, expect } from 'vitest';
import { defineMaxId } from './defineMaxId';
import type { CardData } from './cardGenerator';

const card = (id: string, name: string): CardData => ({ id, name });

describe('defineMaxId', () => {
    it('returns 0 for an empty list', () => {
        expect(defineMaxId([])).toBe(0);
    });

    it('returns the highest numeric value from card names', () => {
        const list: CardData[] = [
            card('1', 'Card 1'),
            card('2', 'Card 2'),
            card('10', 'Card 10'),
            card('7', 'Card 7')
        ];

        expect(defineMaxId(list)).toBe(10);
    });

    it('uses the number from name (second token), not from id', () => {
        const list: CardData[] = [
            card('999', 'Card 3'),
            card('1000', 'Card 12'),
            card('1001', 'Card 5')
        ];

        expect(defineMaxId(list)).toBe(12);
    });

    it('falls back to 0 when name has no second token (e.g. "Card")', () => {
        const list: CardData[] = [card('1', 'Card'), card('2', 'Card 4')];

        expect(defineMaxId(list)).toBe(4);
    });

    it('parses decimal-like token with parseInt semantics (3.9 -> 3)', () => {
        const list: CardData[] = [card('1', 'Card 3.9'), card('2', 'Card 2')];

        expect(defineMaxId(list)).toBe(3);
    });

    it('returns NaN when at least one name has a non-numeric second token', () => {
        const list: CardData[] = [card('1', 'Card A'), card('2', 'Card 5')];

        expect(defineMaxId(list)).toBeNaN();
    });
});
