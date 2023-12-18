import Card from '../../ui/Card'
import Title from '../../ui/Title'
import TerminalContainer from '../../layout/TerminalContainer'
import MessageBoard from './MessageBoard'
import RadialGradientEffect from '../../ui/RadialGradientEffect'

export default function TerminalControl() {
  return (
    <Card title={<Title headingNumber={2} title='Preparation' type='neon' customStyles='text-secondary '/>} customStyle="gap-[10px]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{delay:.8}}>
    <div className="bg-black"></div>
    <div className="flex flex-col gap-5 justify-end">
      <TerminalContainer />
      <MessageBoard />
    </div>
    <RadialGradientEffect color1="rgba(0,0,230,.0)" color2="rgba(0,0,230,0.1)" />
  </Card>
  )
}
