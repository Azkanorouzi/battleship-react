import { motion } from 'framer-motion'

export default function BackgroundSplitDecor() {
  return (
    <div className='absolute flex  w-screen -z-10'>
    <motion.div className={`w-[50vw] h-screen -z-20 bg-secondary `} initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 2, delay: 1}}></motion.div>
    <motion.div className={`w-[50vw] h-screen  bg-slate-900 -z-20`} initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 2, delay: 1}}></motion.div>
    </div>
  )
}
