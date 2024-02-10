import Button from '../../ui/Button'
import { useGameControlContext } from '../../contexts/GameControlContext'

export default function GameDifficultyButtons() {
    const {dispatch: dispatchGame, data: gameData} = useGameControlContext()
  return (
    <section className='flex gap-5 p-4 rounded-lg items-center justify-center'>

        <Button type='neon' text='Easy' customStyles={`text-secondary bg-opacity-0  border-none ${gameData.mode === 'easy' ? 'bg-black bg-opacity-100' : ''}`} onClick={() => {
            dispatchGame({type: 'mode/easy', payLoad: ''})
        }} />
       <Button type='neon' text='Normal' customStyles={`text-yellow-600 bg-opacity-0 border-none ${gameData.mode === 'normal' ? 'bg-black bg-opacity-100' : ''}`} onClick={() => {
            dispatchGame({type: 'mode/normal', payLoad: ''})
        }} />
       <Button type='neon' text='Hard' customStyles={`text-accent bg-opacity-0 border-none ${gameData.mode === 'hard' ? 'bg-black bg-opacity-100' : ''}`} onClick={() => {
            dispatchGame({type: 'mode/hard', payLoad: ''})
        }} />
    </section>
  )
}
