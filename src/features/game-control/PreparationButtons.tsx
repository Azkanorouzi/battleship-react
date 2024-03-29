import { useGameControlContext } from "../../contexts/GameControlContext";
import { useUIControl } from "../../contexts/UIControlCotext";
import messages from "../../data/messages";
import ships from "../../data/ships";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import { generateRandomFills } from "../../utils/generateRandomFIlls";

export default function PreparationButtons() {
  const {data: gameData, dispatch: dispatchGame} = useGameControlContext();
  const {data: uiData, dispatch: dispatchUI} = useUIControl()
  const isConfirmedActive = gameData.fills.length === 17 && uiData.gameState === 'preparation'
  const isResetActive = gameData.fills.length > 0

  return (
    <Card
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 1 }}
  >
    <div className="flex justify-center gap-5">
      <Button type="neon" text="Confirm" customStyles="text-accent " onClick={() => {
        if (!isConfirmedActive) return
        dispatchUI({type: 'game/start', payLoad: ''})
        const randomFills = generateRandomFills(gameData.enemyFills, ships.map(ship => ship.length))
        dispatchGame({type: 'enemyFills/set', payLoad: randomFills})
      }} disabled={!isConfirmedActive}/>
      <Button type="neon" text="Reset" customStyles="text-secondary" disabled={!isResetActive} onClick={() => {
        if (!isResetActive) return
        dispatchUI({type: 'ships/reset', payLoad: ''})
        dispatchGame({type: 'fills/reset', payLoad: ''})
      }}/>
      <Button type="neon" text="Random" customStyles="text-primary" onClick={() => {
        const randomFills = generateRandomFills(gameData.fills, uiData.ships.map(ship => ship.length))
        dispatchGame({type: 'fills/set', payLoad: randomFills})
        dispatchGame({type: 'message/set', payLoad: messages.randomFills})
        dispatchUI({type: 'ships/empty', payLoad: ''})
        dispatchUI({type: 'selectedShip/deselect', payLoad: ''})
        
      }}/>
    </div>
  </Card>
  )
}
