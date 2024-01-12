import { ReactNode, createContext, useContext, useReducer } from "react";
import {GameStateType, initialGameData} from "./InitialData";

const GameContext = createContext({ data: initialGameData, dispatch: (action: { type: string, payLoad: string }) => {
    console.log(action)
}});

function reducer(state: GameStateType, action : {type: string, payLoad: string}): GameStateType{
    switch(action.type) {
        default:
            return {...state}
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