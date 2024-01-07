import { describe, expect, it } from "vitest";
import { checkIfLost } from '../src/utils/gameChecks'

describe('Checks winner, to see if the user has won yet', () => {
    it('returns true when the user has lost the game', () => {
        expect(checkIfLost([])).toBe(true)
    })
    it('returns false when the user has won the game', () => {
        expect(checkIfLost(['a1','a2'])).toBe(false)
    })
})