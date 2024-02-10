import Button from '../../ui/Button'
import { useUIControl } from '../../contexts/UIControlCotext';
import { useGameControlContext } from '../../contexts/GameControlContext';

export default function NewGameButton() {
    const {dispatch: dispatchUI} = useUIControl();
    const {dispatch: dispatchGame} = useGameControlContext();

  return (
    <Button type="neon" text="New game" customStyles="text-accent " onClick={() => {
        dispatchUI({type: 'game/restart', payLoad:''})
        dispatchGame({type: 'game/restart', payLoad:''})
      }}/>
  )
}
