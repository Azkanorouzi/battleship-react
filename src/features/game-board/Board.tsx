import Card from '../../ui/Card'
import Title from '../../ui/Title'
import Grid from '../../ui/Grid'
import RadialGradientEffect from '../../ui/RadialGradientEffect'
import { useUIControl } from '../../contexts/UIControlCotext'

export default function Board() {
  const {data: dataUI} = useUIControl()

  return (
    <Card title={<Title headingNumber={1} title='BATTLE SHIP' type='neon' customStyles='text-accent flex'/>} customStyle=" lg:w-auto w-screen -order-1 lg:order-1 " initial={{scale: 0}} animate={{scale: 1}} transition={{delay:.2}}>
    <Grid row={10} col={10} customCellStyles="bg-[rgba(0,0,0,0.3)]" gridType={dataUI.gameState === 'game' ? 'enemy' : 'user'}/>  
    <RadialGradientEffect color1="rgba(230,0,0,.0)" color2="rgba(230,0,0,0.2)"/>
    </Card>
  )
}

