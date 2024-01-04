import { motion } from 'framer-motion'


export default function Terminal({animate = false, customStyles} : {animate?:boolean, customStyles?: string}) {
  return (
    <motion.div className={`p-3 bg-black rounded-xl flex gap-1 flex-1 ${customStyles} text-white`} initial={{opacity: animate ?  0: 1}} animate={{opacity: 1 }} transition={{delay: .7,duration: .5}}>$<span></span> <input type="text" name="command" id="command" className='focus:border-none focus:outline-none bg-black flex-1'/></motion.div>
  )
}
