import React, { CSSProperties } from 'react'

interface TitleProps {
    headingNumber: 1 | 2 | 3 | 4 | 5 | 6,
    title: string | React.ReactNode,
    type: string,
    color?: string,
    customStyles?: string
}
interface TitleStyle {
    className: string, style: CSSProperties,
}
interface Styles {
    [key:string]: TitleStyle;
}
export default function Title({title, headingNumber, type='neon', color = 'unset', customStyles} : TitleProps) {
    const fontSize = (headingNumber  >= 5 || headingNumber < 1) ? `text-xl` : `lg:text-${7 - headingNumber }xl text-${7-2}xl`
    
    const styles : Styles= {
        neon: {className: `${fontSize} ${customStyles}`, style: {
            textShadow: `2px 2px 10px currentColor`,
            ...(() => color !== 'unset' ? {color: color} : {})()
        }}
    }
    const validateHeadings = [1, 2, 3, 4, 5, 6]
    const tag = validateHeadings.includes(headingNumber)? `h${headingNumber}` : `h6`

    return React.createElement(tag, styles[type], title)
}
<div className='text-xl'></div>