import {easeIn, motion} from 'framer-motion'
interface InfoBoxProps {
    title: string | React.ReactNode;
    info: string | React.ReactNode;
    customStyles?: string;
}
export default function InfoBox({title, info, customStyles} : InfoBoxProps) {
  return (
    <motion.article className={`flex flex-col gap-1  ${customStyles}`} initial={{opacity: 0, translateX:-1000}} whileInView={{opacity: 1, translateX: 0}} transition={{ease: easeIn}}>
        <div>
        {title}
        </div>
        <div>
        {info}
        </div>
        <hr />
    </motion.article>
  )
}
