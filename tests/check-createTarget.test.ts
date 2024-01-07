import { describe, expect, it } from "vitest";
import { createTargetCells } from "../src/utils/gameChecks";

describe('Creates target cells', () => {
    it ('creates target cells successfully (horizontal)', () => {
        expect(createTargetCells({direction: 'horizontal', firstCell: 'a1', length: 4})).toEqual(['a1','a2','a3','a4'])
    })
    it ('creates target cells successfully (horizontal)', () => {
        expect(createTargetCells({direction: 'horizontal', firstCell: 'f4', length: 5})).toEqual(['f4','f5','f6','f7', 'f8'])
    })
    it ('creates target cells successfully (vertical)', () => {
        expect(createTargetCells({direction: 'vertical', firstCell: 'a1', length: 5})).toEqual(['a1','b1','c1','d1', 'e1'])
    })
    it ('creates target cells successfully (vertical)', () => {
        expect(createTargetCells({direction: 'vertical', firstCell: 'g5', length: 3})).toEqual(['g5', 'h5', 'i5'])
    })
    it ('creates target cells successfully (horizontal)', () => {
        expect(createTargetCells({direction: 'horizontal', firstCell: 'a10', length: 1})).toEqual(['a10'])
    })
    it ('creates target cells successfully (horizontal)', () => {
        expect(createTargetCells({direction: 'horizontal', firstCell: 'a0', length: 1})).toEqual(['a0'])
    })
    it ('creates target cells successfully (vertical)', () => {
        expect(createTargetCells({direction: 'vertical', firstCell: 'b10', length: 3})).toEqual(['b10', 'c10', 'd10'])
    })
})