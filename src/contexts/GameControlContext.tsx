import { ReactNode, createContext, useContext, useReducer } from "react";
import {GameStateType, initialGameData} from "./InitialData";
import messages from "../data/messages";
import { generateRandomNumber } from "../utils/generateRandomFIlls";

const GameContext = createContext({ data: initialGameData, dispatch: (action: { type: string, payLoad: string | string[] }) => {
    console.log(action)
}});

function reducer(state: GameStateType, action : {type: string, payLoad: string | string[]}): GameStateType{
    switch(action.type) {
        case 'mode/easy':
            return {...state, mode: 'easy', message: messages.mode.easy[generateRandomNumber(2)]}
        case 'mode/normal':
            return {...state, mode: 'normal', message: messages.mode.normal[generateRandomNumber(2)]}
        case 'mode/hard':
            return {...state, mode: 'hard', message: messages.mode.hard[generateRandomNumber(2)]}
        case 'fills/set':
            return {...state, fills: [...state.fills, ...action.payLoad]}
        case 'fills/reset':
            return {...state, fills: initialGameData.fills, message: messages.preparation.reset[generateRandomNumber(2)]}
        case 'enemyFills/set':
            return {...state, enemyFills: [...action.payLoad], message: messages.startGame}
        case 'fire/user':
            return (typeof action.payLoad === 'string') ? {...state, fired: [...state.fired, action.payLoad ], turn: state.enemyFills.includes(action.payLoad) ? 'user' : 'enemy', message:state.enemyFills.includes(action.payLoad) ? messages.fire.userAccurate[generateRandomNumber(4)] : messages.fire.userInAccurate[generateRandomNumber(4)]} : {...state }
        case 'fire/enemy':
            return (typeof action.payLoad === 'string') ? {...state, enemyFired: [...state.enemyFired, action.payLoad ], turn: state.fills.includes(action.payLoad) ? 'enemy' : 'user', message:state.fills.includes(action.payLoad) ? messages.fire.enemyAccurate[generateRandomNumber(4)] : messages.fire.enemyInAccurate[generateRandomNumber(4)]} : {...state}
        case 'turn/switch':
            return {...state}
        case 'game/restart':
            return {...initialGameData, message: messages.restart}
        case 'enemyFired/reset':
            return {...state, enemyFired: []}
        case 'userLastShot/set':
            return  (typeof action.payLoad === 'string') ?{...state, userResults: {
                ...state.userResults,
                lastShot:  action.payLoad ,
                accurateShots: state.enemyFills.includes(action.payLoad) ? state.userResults.accurateShots + 1 : state.userResults.accurateShots,
                missedShots: !state.enemyFills.includes(action.payLoad) ? state.userResults.missedShots + 1 : state.userResults.missedShots,
            }} : {...state}
        case 'enemyLastShot/set':
            return   (typeof action.payLoad === 'string') ? {...state, enemyResults: {
                ...state.userResults,
                lastShot: action.payLoad,
                accurateShots: state.fills.includes(action.payLoad) ? state.enemyResults.accurateShots + 1 : state.enemyResults.accurateShots,
                missedShots: !state.fills.includes(action.payLoad) ? state.enemyResults.missedShots + 1 : state.enemyResults.missedShots,
            }} : {...state}
        case 'winner/user':
            return {...state, winner:'user', message: messages.winner.user[generateRandomNumber(3)]}
        case 'winner/enemy':
            return {...state, winner:'enemy', message: messages.winner.enemy[generateRandomNumber(3)]}
        case 'message/set':
            return {...state, message: typeof action.payLoad === 'string' ? action.payLoad : state.message}
        default:
            throw new Error('Invalid action type')
    }
}

export default function GameControlContextProvider({ children } : {children: ReactNode}) {
    const [data, dispatch] = useReducer(reducer, initialGameData);

    return (
        <GameContext.Provider value={{
            data,
            dispatch
        }
        }>
            {children}
        </GameContext.Provider>
    )
}

export function useGameControlContext() {
    const context = useContext(GameContext)
    if (!context) {
        throw new Error('useGameControl must be within a game context provider')
    }
    return context
}