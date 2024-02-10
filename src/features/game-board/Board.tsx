import Card from '../../ui/Card'
import Title from '../../ui/Title'
import Grid from '../../ui/Grid'
import RadialGradientEffect from '../../ui/RadialGradientEffect'
import { useGameControlContext } from '../../contexts/GameControlContext'
import { useUIControl } from '../../contexts/UIControlCotext'

export default function Board({type} : {type: 'enemy' | 'user'}) {
  const {data: gameData} = useGameControlContext();
  const {data: uiData} = useUIControl();

  const title = uiData.gameState === 'preparation' ? 'BATTLE SHIP' : gameData.turn === 'enemy' ? 'ENEMY TURN' : 'USER TURN'
  return (
    <Card title={<Title headingNumber={1} title={title} type='neon' customStyles='text-accent flex'/>} customStyle=" lg:w-auto lg:w-[750px] h-[800px] -order-1 lg:order-1 " initial={{scale: 0}} animate={{scale: 1}} transition={{delay:.2}}>
    <Grid row={10} col={10} customCellStyles="bg-[rgba(0,0,0,0.3)]" gridType={type} />  
    <RadialGradientEffect color1="rgba(230,0,0,.0)" color2="rgba(230,0,0,0.2)"/>
    </Card>
  )
}

