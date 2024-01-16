import Card from '../../ui/Card'
import RadialGradientEffect from '../../ui/RadialGradientEffect'
import Title from '../../ui/Title'
import Button from '../../ui/Button'
import ShipPick from './ShipPick'
import { useUIControl } from '../../contexts/UIControlCotext'

export default function ShipPicker() {
  const {data, dispatch} = useUIControl();


  return (
    <Card customStyle="gap-0" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{delay:.5}}>
    <RadialGradientEffect color1="rgba(0,230,0,.0)" color2="rgba(0,230,0,0.2)" />
    <div className="flex justify-between">
      <Title headingNumber={3} title='Ships' type='neon' customStyles='text-secondary '/>
      <Button text={data.dir === 'vertical' ? 'Axis: X' : 'Axis Y'} type="neon"  onClick={
        () => {
          dispatch({type: data.dir === 'vertical' ? 'ships/horizontal' : 'ships/vertical', payLoad: ''})
        }
      }/>
    </div>
    <div className=" overflow-x-scroll max-w-xl"  >
          <div className="flex gap-4  p-5 w-[1100px]">
              {data.ships.map((ship) => {
                return<ShipPick shipType={ship.name} key={ship.id} clicked={data.selectedShip?.name ?? ''} setClicked={() => dispatch({type: 'selectedShip/set', payLoad: ship})}/>
              })}
          </div>
      </div>

    </Card>
  )
}
