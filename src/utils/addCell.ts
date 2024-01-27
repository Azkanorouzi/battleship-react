import alphabet from "../data/alphabet";
import { generateRandomNumber } from "./generateRandomFIlls";

function _addCell(dir: 'up' | 'down' | 'left' | 'right', cell: string) {
    let resultCell = ''
    switch(dir) {
        case 'right':
            resultCell = +cell[1] < 10 ? cell[0] + (cell[1] + 1) : ''
            break;
        case 'down':
            resultCell = +alphabet.indexOf(cell[0]) < 10 ? alphabet[alphabet.indexOf(cell[0]) + 1] + (cell[1]) : ''
            break;
        case 'left':
            resultCell = +cell[1] > 2 ? cell[0] + (+cell[1] - 1) : ''
            break;
        case 'up':
            resultCell = +alphabet.indexOf(cell[0]) > 0 ? alphabet[alphabet.indexOf(cell[0]) - 1] + (cell[1]) : ''
            break;
        default:
            resultCell = ''
    }
    return resultCell
}

export function addRandomCell(cell: string) {
    const dir : ['up', 'down', 'left', 'right'] = ['up', 'down', 'left', 'right']
    let addedCell = ''
    while(!addedCell.length) {
        addedCell = _addCell(dir[generateRandomNumber(4)],cell )
    }
    return addedCell
}

export default addRandomCell;