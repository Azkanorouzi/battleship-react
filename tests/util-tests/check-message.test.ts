import {getMessage} from '../../src/utils/checkMessage'
import { describe, expect, it } from "vitest";

describe('get message works correctly', () => {
    it ('works correctly with correct command provided', () => {
        expect(getMessage('game start --easy')).toBe('Starting the game in easy mode')
        expect(getMessage('game start --hard')).toBe('Starting the game in hard mode')
        expect(getMessage('hi')).toBe('hi back to you :)')
        expect(getMessage('whoAmI')).toBe('a human')
    })
    it ('works correctly with incorrect format command provided', () => {
        expect(getMessage('game start   --easy')).toBe('Starting the game in easy mode')
        expect(getMessage('game     start --hard')).toBe('Starting the game in hard mode')
        expect(getMessage('h i')).toBe('hi back to you :)')
        expect(getMessage('who Am I')).toBe('a human')
    })
    it ('works correctly with non existent command provided', () => {
        expect(getMessage('sayhello')).toBe('Error: please enter a valid command')
        expect(getMessage('winTheGame')).toBe('Error: please enter a valid command')
        expect(getMessage('startIt')).toBe('Error: please enter a valid command')
        expect(getMessage('wskdfweroiiv')).toBe('Error: please enter a valid command')
    })
})