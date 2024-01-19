import Board from '../features/game-board/Board'
import TerminalControl from '../features/game-control/TerminalControl'
import GameButtons from '../features/game-control/GameButtons'
import BoardPreview from '../features/game-board/BoardPreview'
import GameState from '../features/game-control/GameState'
import Card from '../ui/Card'
import { useGameControlContext } from '../contexts/GameControlContext'
import { useEffect } from 'react'
import shotUser from '../utils/shotUser'
import { useUIControl } from '../contexts/UIControlCotext'

export default function BattlePhase() {
  const {data: gameData, dispatch: gameDispatch} = useGameControlContext()
  const {dispatch: uiDispatch} = useUIControl()
  useEffect(() => {
    console.log(gameData.fills, gameData.enemyFired)
    if (gameData.enemyFired.length  && gameData.fills.every(fill => gameData.enemyFired.includes(fill))) {
      gameDispatch({type: 'winner/enemy', payLoad: ''})
      uiDispatch({type: 'game/end', payLoad: ''})
    } 
    if (gameData.fired.length && gameData.enemyFills.every(fill => gameData.fired.includes(fill))) {
      gameDispatch({type: 'winner/user', payLoad: ''})
      uiDispatch({type: 'game/end', payLoad: ''})
    }
    if (gameData.turn === 'user') return
    let enemyCellTarget = '';
    while (enemyCellTarget === '' || gameData.enemyFired.includes(enemyCellTarget)) {
      enemyCellTarget = shotUser('easy') ?? ''
    }

    setTimeout(() => {
      gameDispatch({type: 'fire/enemy', payLoad: enemyCellTarget})
    }, 2000)
  }, [gameData.turn, gameData.enemyFired, gameDispatch, gameData.enemyFills, gameData.fills, gameData.fired, uiDispatch])
  return (
    <div className='flex gap-6 flex-col lg:flex-row '>
      <section className="flex flex-col gap-2 ">
      <Card customStyle=' text-center lg:text-left lg:grid-flow-col'>
        <BoardPreview></BoardPreview>
        <GameState></GameState>
      </Card>
      <TerminalControl stage={`Mode: ${gameData.mode.toUpperCase()}`}/>
      <GameButtons />
      </section>
      <Board type={gameData.turn === 'enemy' ? 'user' : 'enemy'}/>

    </div>
  )
}
