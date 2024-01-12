import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { initialUIData, positionedShip, UIStateType } from "./InitialData";
import { useNavigate } from "react-router-dom";

const UIContext = createContext({ data: initialUIData, dispatch: (action: { type: string, payLoad: string }) => {
    console.log(action)
} });

function reducer(state: UIStateType, action : {type: string, payLoad: string | undefined | positionedShip}): UIStateType {
    switch(action.type) {
        case "toggleInfo":
            return {...state, infoOpen: !state.infoOpen}
        case 'endGame':
            return state.gameState === 'game' ? {...state, gameState: 'complete'} : {...state}
        case 'prepareGame':
            return state.gameState === 'starting' || state.gameState === 'game' ? {...state, gameState: 'preparation'} : {...state}
        case 'startGame':
            return {...state, gameState: 'game'}
        case 'restartGame': 
            return {...state, gameState: 'starting'}
        case 'setShip':
            return {...state, positionedShips: typeof action.payLoad !== 'string' && typeof action.payLoad !== 'undefined' ?  [...state.positionedShips.slice(0,-2), action.payLoad] : [...state.positionedShips]}
        case 'resetShips':
            return state.positionedShips.length ?  {...state, positionedShips: []} : {...state}
        default: 
            return {...state}
    }
}   
export default function UIContextProvider({children} : {children: ReactNode}) {
    const [data, dispatch] = useReducer(reducer, initialUIData);
    const navigate = useNavigate()
    useEffect(() => {
        switch(data.gameState) {
            case 'complete':
                navigate('/endgame')
                break;
            case 'starting':
                navigate('/')
                break;
            case 'game':
                navigate('/battleship')
                break;
            case 'preparation':
                navigate('/preparation')
                break;
            default:
                break;
        }
    }, [data.gameState, navigate])
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