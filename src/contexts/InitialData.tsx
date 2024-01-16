import ships, { ship } from "../data/ships";
import messages from "../data/messages";

export interface GameStateType {
    error: string;
    mode: 'easy' | 'normal' | 'hard' | null;
    fills: string[];
}


export interface UIStateType {
    infoOpen: boolean;
    gameState: 'starting' | 'preparation' | 'game' | 'complete'
    ships: ship[]
    message: string
    selectedShip:ship | null,
    dir: 'vertical' | 'horizontal',
}
const initialGameData: GameStateType = {
    error: '',
    mode: null,
    fills: []
}
const initialUIData: UIStateType = {
    infoOpen: false,
    gameState: 'starting',
    ships: [...ships],
    message: messages.initial,
    selectedShip: null,
    dir: 'horizontal',
}
export {initialGameData, initialUIData};