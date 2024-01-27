import alphabet from "../data/alphabet";
import addRandomCell from "./addCell";
import { generateRandomNumber } from "./generateRandomFIlls";


function shotUser(difficulty: 'easy' | 'normal' | 'hard', lastShot: string, userFills: string[]) {
    const randomNum = generateRandomNumber(10,1)
    const randomAlpha = alphabet[generateRandomNumber(10)]
    const randomCell =  `${randomAlpha}${randomNum}`
    if (difficulty === 'easy') return randomCell
    if (difficulty === 'normal') {
        return generateRandomNumber(100) > 90 ? generateAccurateShot(userFills) : lastShot.length ? addRandomCell(lastShot) : randomCell
    }
    if (difficulty === 'hard') {
        return generateRandomNumber(100) > 40 ? generateAccurateShot(userFills) : lastShot.length ? addRandomCell(lastShot) : randomCell
    }
}

function generateAccurateShot(userFills: string[]) {
    const randomIndex = generateRandomNumber(userFills.length);
    return userFills[randomIndex]
}

export default shotUser;