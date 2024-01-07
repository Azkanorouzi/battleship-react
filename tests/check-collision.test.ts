import { it, describe, expect } from 'vitest'
import {checkCollision} from '../src/utils/gameChecks'


describe('collision tests', () => {
    it('Will be false when, ship length reaches a filled cell', () => {
      expect(checkCollision({cells: ['a4', 'a5', 'a6'], fills: ['a7', 'a8', 'a9']})).toBe(false)
    })
    it('Will be false, when ship length reaches a filled cell', () => {
      expect(checkCollision({cells: ['b1', 'b2', 'b3'], fills: ['c4', 'd4', 'e4', 'f4', 'g4']})).toBe(false)
    })
    it('Will be false, when ship length reaches a filled cell', () => {
      expect(checkCollision({cells: ['j10','i10','h10', 'g10'], fills: ['f10', 'e10', 'd10']})).toBe(false)
    })
    it('Will be false, when ship length reaches a filled cell', () => {
      expect(checkCollision({cells: ['h3', 'h4', 'h5'],fills: ['g3', 'g4', 'g5']})).toBe(false)
    })
    it('Will be true, when no collision happens', () => {
      expect(checkCollision({cells: ['g7', 'h7', 'i7'],fills: ['i7', 'i8', 'i9', 'i10']})).toBe(true)
    })
    it('Will be true, when no collision happens', () => {
      expect(checkCollision({cells: ['j5','j6','j7','j8', 'j9'], fills: ['g9', 'h9', 'i9', 'j9']})).toBe(true)
    })
    it('Will be true, when no collision happens, (vertical)', () => {
      expect(checkCollision({cells: ['a8','a9'],fills: ['a8', 'a9', 'a10']})).toBe(true)
    })
    it('Will be true, when no collision happens, (vertical)', () => {
      expect(checkCollision({cells: ['a6', 'b6', 'c6', 'd6'],fills: ['b6', 'c6', 'd6']})).toBe(true)
    })
})
