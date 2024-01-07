import { describe, expect, it } from "vitest";
import { checkRoom } from '../src/utils/gameChecks'

describe('Checks room, to see if it can place target cells', () => {
    it("Returns true if we have enough room (horizontal)", () => {
        expect(checkRoom({lastCellAlpha: 'f', lastCellNum: 10, targetCells: ['a1', 'a2', 'a3', 'a4']})).toEqual(true)
    })
    it("Returns true if we have enough room (horizontal)", () => {
        expect(checkRoom({lastCellAlpha: 'c', lastCellNum: 5, targetCells: ['b1', 'b2', 'b3', 'b4']})).toEqual(true)
    })
    it("Returns true if we have enough room (vertical)", () => {
        expect(checkRoom({lastCellAlpha: 'j', lastCellNum: 6, targetCells: ['g6', 'h6', 'i6', 'j6']})).toEqual(true)
    })
    it("Returns true if we have enough room (vertical)", () => {
        expect(checkRoom({lastCellAlpha: 'j', lastCellNum: 10, targetCells: ['f10', 'g10']})).toEqual(true)
    })
    it("Returns false if we don't have enough room (horizontal)", () => {
        expect(checkRoom({lastCellAlpha: 'a', lastCellNum: 2, targetCells: ['a12', 'a13', 'a14']})).toEqual(false)
    })
    it("Returns false if we don't have enough room (horizontal)", () => {
        expect(checkRoom({lastCellAlpha: 'b', lastCellNum: 20, targetCells: ['c12', 'c13', 'c14']})).toEqual(false)
    })
    it("Returns false if we don't have enough room (vertical)", () => {
        expect(checkRoom({lastCellAlpha: 'j', lastCellNum: 11, targetCells: ['f12', 'g12', 'h12']})).toEqual(false)
    })
    it("Returns false if we don't have enough room (vertical)", () => {
        expect(checkRoom({lastCellAlpha: 'b', lastCellNum: 13, targetCells: ['f12', 'g12', 'h12']})).toEqual(false)
    })
})