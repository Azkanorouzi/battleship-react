import { motion } from 'framer-motion'
import { useGameControlContext } from '../contexts/GameControlContext'

export default function BackgroundSplitDecor() {
  const {data: gameData} = useGameControlContext()
  return (
    <div className={`absolute flex  w-screen -z-10 h-full transition-colors ${gameData.turn === 'enemy' ? 'bg-accent' : ''}`}>
    <motion.div className={`w-[50vw] fixed h-screen -z-20 transition-colors ${gameData.turn === 'user' ? 'bg-secondary' : 'bg-slate-900'}`} initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: .8, delay: 1}}></motion.div>
    </div>
  )
}
