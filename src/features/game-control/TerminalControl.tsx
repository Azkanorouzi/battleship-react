import Card from '../../ui/Card'
import Title from '../../ui/Title'
import TerminalContainer from '../../layout/TerminalContainer'
import MessageBoard from './MessageBoard'
import RadialGradientEffect from '../../ui/RadialGradientEffect'

export default function TerminalControl({stage = 'Preparation'} : {stage?: 'Preparation' | `Mode: ${string}`}) {
  return (
    <Card title={<Title headingNumber={2} title={stage} type='neon' customStyles={stage === 'Mode: HARD' ? 'text-accent' : stage === 'Mode: NORMAL' ? 'text-yellow-500' : 'text-secondary'}/>} customStyle="gap-[10px]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{delay:.8}}>

    <div className="flex flex-col gap-5 flex-end">
      <TerminalContainer />
      <MessageBoard />
    </div>
    <RadialGradientEffect color1="rgba(0,0,230,.0)" color2="rgba(0,0,230,0.1)" />
  </Card>
  )
}
