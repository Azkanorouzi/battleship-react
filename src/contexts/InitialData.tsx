import { ship } from "../data/ships";

export interface positionedShip {
    ship: ship,
    position: [string, string, string, string] | [string, string] | [string, string, string]
    direction: 'vertical' | 'horizontal'
}

export interface GameStateType {
    message: string;
    error: string;
}
export interface UIStateType {
    infoOpen: boolean;
    gameState: 'starting' | 'preparation' | 'game' | 'complete'
    positionedShips: positionedShip[]

}
const initialGameData: GameStateType = {
    message: '',
    error: '',
}
const initialUIData: UIStateType = {
    infoOpen: false,
    gameState: 'starting',
    positionedShips: [],
}
export {initialGameData, initialUIData};