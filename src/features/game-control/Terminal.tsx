import { motion } from 'framer-motion'
import { useUIControl } from '../../contexts/UIControlCotext'
import { getMessage } from '../../utils/checkMessage'
import { useState } from 'react'
import { useGameControlContext } from '../../contexts/GameControlContext';
import messages from '../../data/messages';
import { generateRandomFills } from '../../utils/generateRandomFIlls';

export default function Terminal({animate = false, customStyles} : {animate?:boolean, customStyles?: string}) {
  const [terminalText, setTerminalText] = useState('game start --easy');
  const {dispatch: dispatchUi, data:dataUi} = useUIControl()
  const {dispatch: dispatchGame, data:dataGame} = useGameControlContext()
  // ================================== Handlers
// Handles the terminal submission
  function handleTerminalSubmit(text: string) {
    // This function will return the corresponding message for a particular command
    //todo
    const message = getMessage(text)
    alert(message)
    switch(message) {
      case 'Starting the game in easy mode':
        if (dataGame.mode !== 'easy')  dispatchGame({type: 'mode/easy', payLoad: ''});
        if (dataUi.gameState !== 'starting') return; 
        dispatchUi({type: 'game/prepare', payLoad: ''})
        dispatchGame({type: 'mode/easy', payLoad: ''})
        break;
      case 'Starting the game in normal mode':
        if (dataGame.mode !== 'normal')  dispatchGame({type: 'mode/normal', payLoad: ''});
        if (dataUi.gameState !== 'starting') return; 
        dispatchUi({type: 'game/prepare', payLoad: ''})
        break;
      case 'Starting the game in hard mode':
        if (dataGame.mode !== 'hard')  dispatchGame({type: 'mode/hard', payLoad: ''});
        if (dataUi.gameState !== 'starting') return; 
        dispatchUi({type: 'game/prepare', payLoad: ''})
        return;
      case 'Surrendering the game':
        if (dataUi.gameState !== 'game') return; 
        dispatchGame({type: 'winner/enemy', payLoad:''})
        dispatchUi({type:'game/end', payLoad: ''})
        return;
      case 'Restarts the game':
        if (dataUi.gameState !== 'game') return; 
        dispatchUi({type: 'game/restart', payLoad:''})
        dispatchGame({type: 'game/restart', payLoad:''})
        return;
      case 'Shows some detail about the game':
        dispatchGame({type: 'message/set', payLoad:messages.details})
        return;
      case 'who are you?':
        dispatchGame({type: 'message/set', payLoad: messages.whoAreYou})
        return;
      case 'who am i?':
        dispatchGame({type: 'message/set', payLoad: messages.whoAmI})
        return;
      case 'Resets the board':
        dispatchGame({type: 'fills/reset', payLoad: ''})
        dispatchUi({type: 'ships/reset', payLoad: ''})
        return;
      case 'hi back to you :)':
        dispatchGame({type: 'message/set', payLoad: messages.greetings})
        return;
      case 'Fills the board randomly':
        dispatchGame({type: 'fills/set', payLoad: generateRandomFills(dataGame.fills, dataUi.ships.map(ship => ship.length))})
        dispatchGame({type: 'message/set', payLoad: messages.randomFills})
        dispatchUi({type: 'ships/empty', payLoad: ''})
        dispatchUi({type: 'selectedShip/deselect', payLoad: ''})
                return;
      case 'Shows the instructions about the game':
        dispatchGame({type: 'message/set', payLoad: messages.instructions})
        return;
      case 'Confirms the board':
        if (dataGame.fills.length === 17 && dataUi.gameState === 'preparation')
        dispatchUi({type: 'game/start', payLoad: ''})
        return;
      default:
        dispatchGame({type: 'message/set', payLoad: message})
        return;
    }
  }
  return (
    <motion.form className={`p-3 bg-black rounded-xl flex gap-1 flex-1 ${customStyles} text-white`} initial={{opacity: animate ?  0: 1}} animate={{opacity: 1 }} transition={{delay: .7,duration: .5}} onSubmit={function(e) {
      e.preventDefault();
      handleTerminalSubmit(terminalText)
    }}>$<span></span> <input type="text" name="command" id="command" className='focus:border-none focus:outline-none bg-black flex-1' onChange={(e) => setTerminalText(e.target.value)} value={terminalText}/></motion.form>
  )
}
  