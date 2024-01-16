import React from 'react'
import Button from '../../ui/Button'
import { useUIControl } from '../../contexts/UIControlCotext';
import { useGameControlContext } from '../../contexts/GameControlContext';
import { useNavigate } from 'react-router-dom';

export default function GameResetButton() {
    const {dispatch: dispatchUI} = useUIControl();
    const {dispatch: dispatchGame} = useGameControlContext();
    const navigate = useNavigate()
  return (
    <Button type="neon" text="Restart" customStyles="text-secondary" onClick={() => {
        dispatchUI({type:'game/prepare', payLoad:''})
        dispatchUI({type: 'ships/reset', payLoad:''})
        dispatchGame({type: 'game/restart', payLoad:''})
        navigate('/preparation')
      }}/>
  )
}
