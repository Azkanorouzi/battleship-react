import alphabet from "../data/alphabet" 

function createTargetCells({direction = 'horizontal', length = 3, firstCell = 'a1'} : {direction: 'vertical' | 'horizontal', length: number, firstCell: string}) {
    const firstCellAlpha = firstCell[0]
    const firstCellNum = firstCell.slice(1)
    console.log(direction, length, firstCell)
    const targetCells = Array.from({length: length}, (_,i) => {
        return direction === 'horizontal' ? `${firstCellAlpha}${+firstCellNum + i}` : `${alphabet[alphabet.indexOf(firstCellAlpha) + i]}${firstCellNum}`
    })
    // return targetCells
    return targetCells
}
function checkCollision({ cells, fills} : {fills: string[], cells: string[]}) {
    return cells.some(cell => fills.includes(cell))
}

function checkRoom({lastCellAlpha = 'j', lastCellNum = 10, targetCells} : {lastCellAlpha?: string, lastCellNum?: number, targetCells: string[]}) {
    return targetCells.every(cell => +cell.slice(1) <= lastCellNum && alphabet.indexOf(cell[0]) <= alphabet.indexOf(lastCellAlpha))
}
function checkIfLost(userShipsPos : string[]) {
    return userShipsPos.length === 0
}

export {checkCollision, createTargetCells, checkRoom, checkIfLost}