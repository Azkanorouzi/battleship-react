
import { motion } from 'framer-motion';
import messages from '../../data/messages';
import useTypeEffect from '../../utils/useTypeEffect';

export default function MessageBoard() {

    const typedMessage = useTypeEffect({ text: messages.initial, speed: 50});
  return (
    <motion.section className='h-44 max-w-lg bg-black rounded-xl overflow-y-scroll p-5  text-white' transition={{duration: .5}} initial={{opacity: 0}} animate={{opacity: 1}}>
        {typedMessage} <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{repeat:Infinity, duration:.8, ease: 'linear'}}>|</motion.span>
    </motion.section>
  )
}