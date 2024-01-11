import Grid from '../../ui/Grid'
import Title from '../../ui/Title'

export default function BoardPreview() {
  return (
    <div className='grid gap-7 '>
      <Title headingNumber={2} type='neon' title="Your board" customStyles='lg:hidden text-accent'/>
      
          <Grid row={10} col={10} customCellStyles="bg-[rgba(0,0,0,0.5)] hover:bg-secondary" customStyles='lg:w-[299px] lg:h-[299px]' rowName={false} headName={true} />  
    </div>
  )
}
