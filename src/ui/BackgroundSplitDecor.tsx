import { motion } from 'framer-motion'

export default function BackgroundSplitDecor() {
  return (
    <motion.div className='w-[50vw] h-screen absolute -z-10 bg-secondary ' initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 2, delay: 1}}></motion.div>
  )
}
