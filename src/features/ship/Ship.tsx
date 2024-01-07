
import battleship from '../../assets/battleshipX.svg'
import carrier from '../../assets/carrierX.svg'
import cruiser from '../../assets/cruiserX.svg'
import destroyer from '../../assets/destroyerX.svg'
import submarine from '../../assets/submarineX.svg'
import { shipNames } from '../../data/ships'

export default function Ship({shipType} : {shipType: shipNames | string}) {
    const shipUrl = shipType === 'battleship'? battleship : shipType === 'carrier'? carrier : shipType === 'cruiser'? cruiser : shipType === 'destroyer'? destroyer : shipType ==='submarine' ? submarine :''
  return (
    <img src={shipUrl} alt={shipType} className='w-full h-full'/>
  )
}
