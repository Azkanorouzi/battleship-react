import React from 'react'
import Board from '../features/game-board/Board'
import TerminalControl from '../features/game-control/TerminalControl'
import GameButtons from '../features/game-control/GameButtons'
import BoardPreview from '../features/game-board/BoardPreview'
import GameState from '../features/game-control/GameState'
import Card from '../ui/Card'

export default function BattlePhase() {

  return (
    <div className='flex gap-6 flex-col lg:flex-row '>

      <section className="flex flex-col gap-2 ">
      <Card customStyle=' text-center lg:text-left lg:grid-flow-col'>
        <BoardPreview></BoardPreview>
        <GameState></GameState>
      </Card>
      <TerminalControl stage='War'/>
      <GameButtons />
      </section>
      <Board />

    </div>
  )
}
