import { useGameControlContext } from "../../contexts/GameControlContext";
import StateInfo from "./StateInfo";


export default function GameState() {
  const {data: gameData} = useGameControlContext()
  return (
    <div className="text-white flex flex-col gap-2  justify-between">
      {/* Your board  */}
      <StateInfo title="Your board" accurateShots={gameData.userResults.accurateShots} lastShot={gameData.userResults.lastShot} missedShots={gameData.userResults.missedShots} />
      <hr />
      {/* Enemy board */}
      <StateInfo title="Enemy board" accurateShots={gameData.enemyResults.accurateShots} lastShot={gameData.enemyResults.lastShot} missedShots={gameData.enemyResults.missedShots} />
    </div>
  )
}
