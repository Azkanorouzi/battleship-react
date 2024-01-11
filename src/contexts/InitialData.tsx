export interface GameStateType {
    message: string;
    error: string;
}
export interface UIStateType {
    infoOpen: boolean;
}
const initialGameData: GameStateType = {
    message: '',
    error: ''
}
const initialUIData: UIStateType = {
    infoOpen: false,
}
export {initialGameData, initialUIData};