import { createContext, useReducer } from "react";
import initialData, {StateType} from "./InitialData";

const GameContext = createContext(null);

function reducer(state: StateType, action : {type: string, payLoad: string}) {
    switch(action.type) {
        case'working':
            return {...state, name: 'Hey there!'}
        default:
            return {...state}
    }
}
function GameControlContextProvider({ children }) {
    const [data, dispatch] = useReducer(reducer, initialData);
    return (
        <GameContext.Provider value={{
            data,
            dispatch,
        }
        }>
            {children}
        </GameContext.Provider>
    )
}
