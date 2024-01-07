import Card from '../../ui/Card'
import ships from '../../data/ships'

export default function ShipPick({shipType = 'battleship'}: {shipType: 'battleship' | 'carrier' | 'cruiser' | 'destroyer' |'submarine'}) {
  const ship = ships.find(({ name }) => name === shipType ) 

  return (
      <div >
          <Card customStyle='bg-neutral'>
          <img src={ship?.url} alt={ship?.name} className={` h-20 cursor-pointer  bg-neutral outline-none  p-3 border border-accent shadow-xl `}   />
        </Card>
      </div>
  )
}
