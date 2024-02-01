import { motion } from 'framer-motion'
import { useUIControl } from '../../contexts/UIControlCotext'
import { getMessage } from '../../utils/checkMessage'
import { useState } from 'react'
import { useGameControlContext } from '../../contexts/GameControlContext';


export default function Terminal({animate = false, customStyles} : {animate?:boolean, customStyles?: string}) {
  const [terminalText, setTerminalText] = useState('game start --easy');
  const {dispatch: dispatchUi} = useUIControl()
  const {dispatch: dispatchGame} = useGameControlContext()
  // ================================== Handlers
// Handles the terminal submission
  function handleTerminalSubmit(text: string) {
    // This function will return the corresponding message for a particular command
    const message = getMessage(text)
    switch(message) {
      case 'Starting the game in easy mode':
        dispatchUi({type: 'game/prepare', payLoad: ''})
        dispatchGame({type: 'mode/easy', payLoad: ''})
        break;
      case 'Starting the game in normal mode':
        dispatchUi({type: 'game/prepare', payLoad: ''})
        dispatchGame({type: 'mode/normal', payLoad: ''})
        break;
      case 'Starting the game in hard mode':
        dispatchUi({type: 'game/prepare', payLoad: ''})
        dispatchGame({type: 'mode/hard', payLoad: ''})
    }
  }
  return (
    <motion.form className={`p-3 bg-black rounded-xl flex gap-1 flex-1 ${customStyles} text-white`} initial={{opacity: animate ?  0: 1}} animate={{opacity: 1 }} transition={{delay: .7,duration: .5}} onSubmit={function(e) {
      e.preventDefault();
      handleTerminalSubmit(terminalText)
    }}>$<span></span> <input type="text" name="command" id="command" className='focus:border-none focus:outline-none bg-black flex-1' onChange={(e) => setTerminalText(e.target.value)} value={terminalText}/></motion.form>
  )
}
