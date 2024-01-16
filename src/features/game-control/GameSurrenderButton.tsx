import { useGameControlContext } from "../../contexts/GameControlContext";
import { useUIControl } from "../../contexts/UIControlCotext";
import Button from "../../ui/Button";

export default function GameSurrenderButton() {
    const {dispatch: dispatchUI} = useUIControl();
    const {dispatch: dispatchGame} = useGameControlContext();
  return (
    <Button type="neon" text="Surrender" customStyles="text-accent " onClick={() => {
        dispatchGame({type: 'winner/enemy', payLoad:''})
        dispatchUI({type:'game/end', payLoad: ''})
      }}/>
  )
}
