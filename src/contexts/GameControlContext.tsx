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