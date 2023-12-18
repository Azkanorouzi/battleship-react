import { CSSProperties } from "react";

interface ButtonProps {
    type: string,
    color?: string,
    customStyles?: string,
    text: string,
}
interface TitleStyle {
    className: string, style: CSSProperties,
}
interface Styles {
    [key:string]: TitleStyle;
}
// Custom styles is extra tailwind classes
export default function Button({type, color, customStyles, text} : ButtonProps) {

    const styles : Styles= {
        neon: {className: `btn ${customStyles}`, style: {
            boxShadow: `2px 2px 10px currentColor`,
            ...(() => color !== 'unset' ? {color: color} : {})()
        }}
    }
  return (
    <button className={styles[type].className} style={styles[type].style}>{text}</button>
  )
}
