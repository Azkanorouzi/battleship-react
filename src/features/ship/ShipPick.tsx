import Card from '../../ui/Card'
import battleship from '../../assets/battleshipX.svg'
import carrier from '../../assets/carrierX.svg'
import cursior from '../../assets/cruiserX.svg'
import destroyer from '../../assets/destroyerX.svg'
import sumbarine from '../../assets/submarineX.svg'
import {motion} from 'framer-motion'


import {useDrag} from 'react-dnd'


export default function ShipPick({shipType = 'battleship'}: {shipType: 'battleship' | 'carrier' | 'cruiser' | 'destroyer' |'submarine'}) {
  const [{isDragging}, drag] = useDrag({
    type: "ITEM",
    item: { name },
    collect: (monitor) => {
      return { isDragging: monitor.isDragging()}
    },
  })

  return (
    <motion.div initial={{opacity:0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: .3}}>
    <Card customStyle='bg-neutral'>
      <div className={`bg-secondary absolute left-0 top-0 right-0 bottom-0 rounded-xl bg-opacity-40 backdrop-blur-lg grid place-content-center transition-all ${!isDragging && ' opacity-0 -z-10' }`} >
        <h4>{shipType}</h4>
        <p>Length: {shipType === 'battleship' ? 4 : shipType === 'carrier' ? 5 : shipType === 'cruiser' ? 3 : shipType === 'destroyer' ? 2 : 3}</p>
      </div>

      <img src={shipType === 'battleship' ? battleship : shipType === 'carrier' ? carrier : shipType === 'cruiser' ? cursior : shipType === 'destroyer' ? destroyer : sumbarine} alt='ship' className={` h-20 cursor-move  bg-neutral outline-none  p-3 border border-accent shadow-xl shadow-accent`} ref={drag}/>

    </Card>
    </motion.div>
  )
}
