import {  motion } from 'framer-motion'

export default function Card ({title, children, animate = {scaleY: 1}, customStyle, initial = {scaleY: 0}, transition={ease:'easeIn'}} : {title?: React.ReactNode, animate?:any, children: React.ReactNode, customStyle?:string, initial?: any, transition?: any }) {
  return (
    <motion.article className={`bg-primary p-4 lg:p-10 shadow-2xl rounded-xl shadow-accent grid gap-10 bg-opacity-60 backdrop-blur-lg border border-accent  ${customStyle}`} initial={initial} animate={animate} transition={transition}>
      {title && <section>{title}</section>}
      {children}
    </motion.article>
  )
}
