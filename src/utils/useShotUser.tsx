import  { useEffect } from 'react'
import { useUIControl } from '../contexts/UIControlCotext'
import { useGameControlContext } from '../contexts/GameControlContext'
import shotUser from './shotUser'

export default function useShotUser() {
    const {data: gameData, dispatch: gameDispatch} = useGameControlContext()
    const {dispatch: uiDispatch} = useUIControl()
    useEffect(() => {
      if (gameData.enemyFired.length && gameData.fills.every(fill => gameData.enemyFired.includes(fill))) {
        gameDispatch({type: 'winner/enemy', payLoad: ''})
        uiDispatch({type: 'game/end', payLoad: ''})
        return;
      }
        if (gameData.fired.length && gameData.enemyFills.every(fill => gameData.fired.includes(fill))) {
          gameDispatch({type: 'winner/user', payLoad: ''})
          uiDispatch({type: 'game/end', payLoad: ''})
          return;
        }
        if (gameData.turn === 'user') return
        let enemyCellTarget = '';
        while (enemyCellTarget === '' || gameData.enemyFired.includes(enemyCellTarget)) {
          enemyCellTarget = shotUser(gameData.mode, gameData.fills.includes(gameData.enemyResults.lastShot) ? gameData.enemyResults.lastShot : '', gameData.fills) ?? ''
        }

        const shotTimeOut = setTimeout(() => {
          gameDispatch({type: 'enemyLastShot/set', payLoad: enemyCellTarget})
          gameDispatch({type: 'fire/enemy', payLoad: enemyCellTarget})
        }, 2000)
        return () => clearTimeout(shotTimeOut);
      }, [gameData.turn, gameData.enemyFired, gameDispatch, gameData.enemyFills, gameData.fills, gameData.fired, uiDispatch, gameData.mode, gameData.enemyResults.lastShot])
}
