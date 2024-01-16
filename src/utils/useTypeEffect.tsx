import { useEffect, useState } from "react";

interface UseTypeEffectProps {
    text: string;
    speed?: number;
}

export default function useTypeEffect({text, speed = 100} : UseTypeEffectProps) {
    const [curMessage, setCurMessage] = useState('');
    useEffect(() => {
      setCurMessage('')
    }, [text])
    useEffect(() => {
        const intervalId = setInterval(() => {
          if (text[curMessage.length] === undefined) {
            clearInterval(intervalId)
            return;
          }
          
          setCurMessage(() => {
            return curMessage + text[curMessage.length];
          }) 
        }, speed)
        return () => clearInterval(intervalId)
      }, [text, speed, curMessage])
      return curMessage;
}
