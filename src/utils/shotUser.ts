import alphabet from "../data/alphabet";
import { generateRandomNumber } from "./generateRandomFIlls";


function shotUser(difficulty: 'easy' | 'normal' | 'hard') {
    const randomNum = generateRandomNumber(10,1)
    const randomAlpha = alphabet[generateRandomNumber(10)]
    if (difficulty === 'easy') return `${randomAlpha}${randomNum}`
}

export default shotUser;