import ships, { ship } from "../data/ships";
import messages from "../data/messages";

export interface GameStateType {
    error: string;
    mode: 'easy' | 'normal' | 'hard';
    fills: string[];
    enemyFills: string[];
    fired: string[];
    enemyFired: string[];
    turn: 'user' | 'enemy';
    winner: 'user' | 'enemy' | null;
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
    mode: 'easy',
    fills: [],
    enemyFills: [],
    fired: [],
    enemyFired: [],
    turn: 'user',
    winner: null,
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