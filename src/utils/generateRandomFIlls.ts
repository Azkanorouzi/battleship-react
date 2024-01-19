import alphabet from "../data/alphabet";
import { checkCollision, checkRoom, createTargetCells } from "./gameChecks";
// const shipsLengthArr = ships.map(ship => ship.length);
const dir : ['vertical', 'horizontal'] = ['vertical', 'horizontal'];

export function generateRandomFills(fills: string[], shipsLengthArr: number[]) {
    // Will be filled/returned
    const randomFills = [];
    for (let i = 0; i < shipsLengthArr.length;) {
            // Random direction for the cell
    const randomDir : 'vertical' | 'horizontal'= dir[generateRandomNumber(2)]
    // There's 26 letters in english
    const randomAlphabet = alphabet[generateRandomNumber(27)]
    // Our board max index is 10
    const randomNumber = generateRandomNumber(11, 1) 
    // Contains a random first cell
    const randomFirstCell = `${randomAlphabet}${randomNumber}`
        const randomCells = createTargetCells({direction: randomDir, length: shipsLengthArr[i], firstCell: randomFirstCell})
        if (checkCollision({fills: randomFills, cells: randomCells}) || !checkRoom({targetCells: randomCells}) ) continue;
        i++;
        randomFills.push(...randomCells)
    }
    return randomFills;
}

export function generateRandomNumber(max: number, min?: number ) {
    if (min === undefined ) min = 0
    if (max < 0) throw new Error('Max must be greater than zero');
    return Math.floor(Math.random() * max) + min;
}



// function createTargetCells({direction = 'horizontal', length = 3, firstCell = 'a1'} : {direction: 'vertical' | 'horizontal', length: number, firstCell: string}) {
//     const firstCellAlpha = firstCell[0]
//     const firstCellNum = firstCell.slice(1)
    
//     const targetCells = Array.from({length: length}, (_,i) => {
//         return direction === 'horizontal' ? `${firstCellAlpha}${+firstCellNum + i}` : `${alphabet[alphabet.indexOf(firstCellAlpha) + i]}${firstCellNum}`
//     })
//     // return targetCells
//     return targetCells
// }