import Card from '../../ui/Card'
import ships from '../../data/ships'

export default function ShipPick({shipType = 'battleship', setClicked, clicked}: {shipType: 'battleship' | 'carrier' | 'cruiser' | 'destroyer' |'submarine', setClicked: () => void, clicked: string}) {
  const ship = ships.find(({ name }) => name === shipType ) 

  return (
      <div className='cursor-pointer relative' onClick={() => setClicked()}>
          <Card customStyle='bg-neutral'>
          {clicked === ship?.name && <section className='text-white grid place-content-center cursor-pointer  bg-neutral outline-none  p-3 border border-accent shadow-xl absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-opacity-50 backdrop-blur-sm'>
            <h4>{ship?.name}</h4>
            <h5>Length: {ship?.length}</h5>
          </section>}
          <img src={ship?.url} alt={ship?.name} className={` h-20 cursor-pointer  bg-neutral outline-none  p-3 border border-accent shadow-xl `}   /> 
        </Card>
      </div>
  )
}
