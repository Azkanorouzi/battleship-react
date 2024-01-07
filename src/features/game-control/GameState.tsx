import StateInfo from "./StateInfo";


export default function GameState() {
  return (
    <div className="text-white flex flex-col gap-2  justify-between">
      {/* Your board  */}
      <StateInfo title="Your board" accurateShots={0} lastShot={'a0'} shipsLeft={5} />
      <hr />
      {/* Enemy board */}
      <StateInfo title="Enemy board" accurateShots={0} lastShot={'a0'} shipsLeft={5} />

      
    </div>
  )
}
