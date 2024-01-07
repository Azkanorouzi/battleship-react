import { CSSProperties } from "react";

interface ButtonProps {
    type: string,
    color?: string,
    customStyles?: string,
    text: string,
    onClick?: ({target}: {target: EventTarget}) => void,
}
interface TitleStyle {
    className: string, style: CSSProperties,
}
interface Styles {
    [key:string]: TitleStyle;
}
function defaultOnClick({target} : {target: EventTarget}) { console.log(target)}
// Custom styles is extra tailwind classes
export default function Button({type, color, customStyles, text, onClick=defaultOnClick} : ButtonProps) {

    const styles : Styles= {
        neon: {className: `btn ${customStyles}`, style: {
            boxShadow: `2px 2px 10px currentColor`,
            ...(() => color !== 'unset' ? {color: color} : {})()
        }}
    }
  return (
    <button className={styles[type].className} style={styles[type].style} onClick={onClick}>{text}</button>
  )
}
