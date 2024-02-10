import TerminalContainer from './TerminalContainer'
import Title from '../ui/Title'
import Card from '../ui/Card'
import MessageBoard from '../features/game-control/MessageBoard'
import RadialGradientEffect from '../ui/RadialGradientEffect'
import Button from '../ui/Button'
import { useUIControl } from '../contexts/UIControlCotext'
import GameDifficultyButtons from '../features/game-control/GameDifficultyButtons'
import { useGameControlContext } from '../contexts/GameControlContext'
import messages from '../data/messages'
import { generateRandomNumber } from '../utils/generateRandomFIlls'


export default function InitialPhase() {
  const {dispatch: dispatchUI} = useUIControl()
  const {dispatch: dispatchGame} = useGameControlContext()
  return (
    <Card title={<Title headingNumber={1} title='BATTLE SHIP' type='neon' customStyles='text-center text-accent'/>} customStyle='w-screen lg:w-[500px] lg:h-[700px] lg:self-center'>
      <div className='flex gap-5 flex-col justify-center items-center '>
      <TerminalContainer />
      <MessageBoard />
      </div>
      <RadialGradientEffect color1="rgba(230,0,0,.0)" color2="rgba(230,0,0,0.2)"/>
      <GameDifficultyButtons />
      <div className='flex justify-center'>
      <Button type='neon' text='Start' customStyles='text-accent bg-opacity-0 border-none w-[250px]' onClick={() => {
        dispatchUI({type: 'game/prepare', payLoad: ''})
        dispatchGame({type: 'message/set', payLoad: messages.preparation.initial[generateRandomNumber(2)]})
      }}/>
      </div>
    </Card>
  )
}
