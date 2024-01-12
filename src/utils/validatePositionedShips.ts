import { checkCollision, checkRoom } from "./gameChecks";

function validatePositionedShips(cells: string[], fills: string[], targetCells: string[]) {
    return !checkCollision({cells, fills}) &&  checkRoom({targetCells})
}

export {validatePositionedShips}