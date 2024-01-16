import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { initialUIData, UIStateType } from "./InitialData";
import { useNavigate } from "react-router-dom";
import { ship } from "../data/ships";

// ================================== Context
const UIContext = createContext({ data: initialUIData, dispatch: (action: { type: string, payLoad: string | ship }) => {
    console.log(action)
} });
// ================================== Reducer
function reducer(state: UIStateType, action : {type: string, payLoad: string | null | ship }): UIStateType {
    switch(action.type) {
        case "toggleInfo":
            return {...state, infoOpen: !state.infoOpen}
        case 'game/end':
            return state.gameState === 'game' ? {...state, gameState: 'complete'} : {...state}
        case 'game/prepare':
            return state.gameState === 'starting' || state.gameState === 'game' || state.gameState === 'complete' ? {...state, gameState: 'preparation'} : {...state}
        case 'game/start':
            return {...state, gameState: (state.gameState === 'starting') ? 'game' : 'game'}
        case 'game/restart': 
            return {...initialUIData}
        case 'ships/set':
            return {...state, selectedShip: null , ships: state.ships.filter(ship => {
                return ship.id !== action.payLoad
            })}
        case 'ships/reset':
            return {...state, ships: initialUIData.ships}
        case 'ships/vertical':
            return {...state, dir: 'vertical'}
        case 'ships/horizontal':
            return {...state, dir: 'horizontal'}
        case 'selectedShip/set' :
            return {...state, selectedShip: typeof action.payLoad !== 'string' ? action.payLoad : state.selectedShip}
        case 'message/set':
            return {...state, message: (typeof action.payLoad === 'string') ? action.payLoad : state.message}
        default: 
            throw new Error("Invalid action type")
    }
} 

// ================================== Context provider
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
// ================================== Context custom hook
export function useUIControl() {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error('useUIControl must be within a ui context provider')
    }
    return context
}