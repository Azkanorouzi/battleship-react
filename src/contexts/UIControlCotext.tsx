import { createContext, ReactNode, useContext, useReducer } from "react";
import { initialUIData, UIStateType } from "./InitialData";

const UIContext = createContext({});
function reducer(state: UIStateType, action : {type: string, payLoad: string}) {
    switch(action.type) {
        case "toggleInfo":
            return {...state, infoOpen: !state.infoOpen}
        default: 
            return {...state}
    }
}   
export default function UIContextProvider({children} : {children: ReactNode}) {
    const [data, dispatch] = useReducer(reducer, initialUIData);
    return <UIContext.Provider value={{
        data, dispatch
    }}>
        {children}
    </UIContext.Provider>
}

export function useUIControl() {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error('useUIControl must be within a ui context provider')
    }
    return context
}