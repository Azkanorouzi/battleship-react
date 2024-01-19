import { ReactNode, createContext, useContext, useReducer } from "react";
import {GameStateType, initialGameData} from "./InitialData";

const GameContext = createContext({ data: initialGameData, dispatch: (action: { type: string, payLoad: string | string[] }) => {
    console.log(action)
}});

function reducer(state: GameStateType, action : {type: string, payLoad: string | string[]}): GameStateType{
    switch(action.type) {
        case 'mode/easy':
            return {...state, mode: 'easy'}
        case 'mode/normal':
            return {...state, mode: 'normal'}
        case 'mode/hard':
            return {...state, mode: 'hard'}
        case 'fills/set':
            return {...state, fills: [...state.fills, ...action.payLoad]}
        case 'fills/reset':
            return {...state, fills: initialGameData.fills}
        case 'enemyFills/set':
            return {...state, enemyFills: [...action.payLoad]}
        case 'fire/user':
            return (typeof action.payLoad === 'string') ? {...state, fired: [...state.fired, action.payLoad ], turn: 'enemy'} : {...state, fired: [...state.fired, ...action.payLoad], turn: 'enemy'}
        case 'fire/enemy':
            return (typeof action.payLoad === 'string') ? {...state, enemyFired: [...state.enemyFired, action.payLoad ], turn: 'user'} : {...state, enemyFired: [...state.enemyFired, ...action.payLoad], turn: 'user'}
        case 'turn/switch':
            return {...state, }
        case 'game/restart':
            return {...initialGameData}
        case 'winner/user':
            return {...state, winner:'user'}
        case 'winner/enemy':
            return {...state, winner:'enemy'}
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