import alphabet from "../data/alphabet";
import addRandomCell from "./addCell";
import { generateRandomNumber } from "./generateRandomFIlls";


function shotUser(difficulty: 'easy' | 'normal' | 'hard', lastShot: string, userFills: string[]) {
    const randomNum = generateRandomNumber(10,1)
    const randomAlpha = alphabet[generateRandomNumber(10)]
    const randomCell =  `${randomAlpha}${randomNum}`
    if (difficulty === 'easy') return randomCell
    if (difficulty === 'normal') {
        const randomIndex = generateRandomNumber(userFills.length);
        console.log(userFills[randomIndex])
        return userFills[randomIndex]
    }
    if (difficulty === 'normal' || difficulty === 'hard') {
        return lastShot.length ? addRandomCell(lastShot) : randomCell
    }
}

export default shotUser;