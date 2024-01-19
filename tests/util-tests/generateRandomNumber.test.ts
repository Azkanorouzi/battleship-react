import {generateRandomNumber} from '../../src/utils/generateRandomFIlls'
import { describe, expect, it } from "vitest";


function generateRandomNums({max, maxArrLength} : {max: number, maxArrLength: number}) : number[] {
    const randomNums : number[] = []
    for (let i = 0; i < maxArrLength; i++) {
        randomNums.push(generateRandomNumber(max))
    }
    return randomNums
}
describe('Generate Random Number works correctly', () => {
    it('Works correctly given a small positive number', () => {
        const randomNums = generateRandomNums({max: 2, maxArrLength: 20})
        expect(randomNums.includes(1)).toBeTruthy()
        expect(randomNums.includes(0)).toBeTruthy()
        expect(randomNums.includes(3)).toBeFalsy()
        expect(randomNums.includes(4)).toBeFalsy()
    })
    it('Works correctly given a positive number', () => {
        const randomNums = generateRandomNums({max: 20, maxArrLength: 200})
        expect(randomNums.includes(19)).toBeTruthy()
        expect(randomNums.includes(18)).toBeTruthy()
        expect(randomNums.includes(4)).toBeTruthy()
        expect(randomNums.includes(8)).toBeTruthy()
        expect(randomNums.includes(20)).toBeFalsy()
        expect(randomNums.includes(-1)).toBeFalsy()
    })
    it('Throws an error when given a negative or zero', () => {
        expect(() => generateRandomNums({max: -1, maxArrLength: 20})).toThrow();
    })
})