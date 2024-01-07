import { motion } from 'framer-motion'

export default function BackgroundSplitDecor() {
  return (
    <div className='absolute flex  w-screen -z-10 h-full '>
    <motion.div className={`w-[50vw] lg:h-screen -z-20 bg-secondary `} initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 2, delay: 1}}></motion.div>
    <motion.div className={`w-[50vw] h-screen  lg:bg-slate-900 -z-20 bg-secondary `} initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 2, delay: 1}}></motion.div>
    </div>
  )
}
