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
    userResults: {
        missedShots: number;
        accurateShots:number;
        lastShot: string;
    }
    enemyResults: {
        missedShots: number;
        accurateShots:number;
        lastShot: string;
    }
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
    mode: 'normal',
    fills: [],
    enemyFills: [],
    fired: [],
    enemyFired: [],
    turn: 'user',
    winner: null,
    userResults: {
        missedShots: 0,
        accurateShots:0,
        lastShot: ''
    },
    enemyResults: {
        missedShots: 0,
        accurateShots: 0,
        lastShot: ''
    }
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