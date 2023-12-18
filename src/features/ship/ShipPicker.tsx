import Card from '../../ui/Card'
import RadialGradientEffect from '../../ui/RadialGradientEffect'
import Title from '../../ui/Title'
import Button from '../../ui/Button'
import ShipPick from './ShipPick'

export default function ShipPicker() {
  return (
    <Card customStyle="gap-0" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{delay:.5}}>
    <RadialGradientEffect color1="rgba(0,230,0,.0)" color2="rgba(0,230,0,0.2)" />
    <div className="flex justify-between">
      <Title headingNumber={3} title='Ships' type='neon' customStyles='text-secondary '/>
      <Button text='Axis: X' type="neon"  />
    </div>
    <div className=" overflow-x-scroll max-w-xl">
      
      <section className="flex gap-4  p-5 w-[1100px]">
        <ShipPick key={1} shipType="battleship"/>
        <ShipPick key={2} shipType="carrier"/>
        <ShipPick key={3} shipType="cruiser"/>
        <ShipPick key={4} shipType="destroyer"/>
        <ShipPick key={5} shipType="submarine"/>
      </section>
      </div>
    </Card>
  )
}
