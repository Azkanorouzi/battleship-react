
import { useGameControlContext } from '../../contexts/GameControlContext'
import Grid from '../../ui/Grid'
import Title from '../../ui/Title'

export default function BoardPreview() {
  const {data: dataGame} = useGameControlContext()

  return (
    <div className='grid gap-7 '>
      <Title headingNumber={2} type='neon' title="Your board" customStyles='lg:hidden text-accent'/>
      <Grid row={10} col={10} customCellStyles="bg-[rgba(0,0,0,0.5)]" customStyles='width-290 ' rowName={false} headName={true} gridType={dataGame.turn} />  
    </div>
  )
}
