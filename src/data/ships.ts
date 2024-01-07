
import battleship from '../assets/battleshipX.svg'
import carrier from '../assets/carrierX.svg'
import cruiser from '../assets/cruiserX.svg'
import destroyer from '../assets/destroyerX.svg'
import sumbarine from '../assets/submarineX.svg'
export type shipNames = 'battleship' | 'carrier' | 'cruiser' | 'destroyer' |'submarine';
export interface ship {
    name:  shipNames;
    length: 5 | 4 | 3 | 2;
    url: string;
    id: string;
}
type shipsArr = ship[]
const ships : shipsArr = [
    {
        name: 'battleship',
        length: 4,
        url: battleship,
        id:  crypto.randomUUID()
    },
    {
        name: 'carrier',
        length: 5,
        url: carrier,
        id: crypto.randomUUID()
    },
    {
        name: 'cruiser',
        length: 3,
        url: cruiser,
        id:  crypto.randomUUID()
    },
    {
        name: 'destroyer',
        length: 3,
        url: destroyer,
        id:  crypto.randomUUID()
    },
    {
        name:'submarine',
        length: 2,
        url: sumbarine
        ,id:  crypto.randomUUID()
    }
]
export default ships