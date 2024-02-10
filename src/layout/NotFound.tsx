import Card from '../ui/Card'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
  return (
    <Card title="404" customStyle='text-xl text-center text-accent'>
        <p>This page does not exist</p>
        <Button type='neon' text='Go back' customStyles='text-accent bg-opacity-0 border-none' onClick={() => navigate(-1)}/>
    </Card>
  )
}
