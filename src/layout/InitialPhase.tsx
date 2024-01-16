import TerminalContainer from './TerminalContainer'
import Title from '../ui/Title'
import Card from '../ui/Card'
import MessageBoard from '../features/game-control/MessageBoard'
import RadialGradientEffect from '../ui/RadialGradientEffect'
import Button from '../ui/Button'
import { useUIControl } from '../contexts/UIControlCotext'

export default function InitialPhase() {
  const {dispatch} = useUIControl()
  return (
    <Card title={<Title headingNumber={1} title='BATTLE SHIP' type='neon' customStyles='text-center text-accent'/>}>
      <TerminalContainer />
      <MessageBoard />
      <RadialGradientEffect color1="rgba(230,0,0,.0)" color2="rgba(230,0,0,0.2)"/>
      <Button type='neon' text='Start' customStyles='text-accent bg-opacity-0 border-none' onClick={() => dispatch({type: 'game/prepare', payLoad: ''}) }/>
    </Card>
  )
}
