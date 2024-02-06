import { useGameControlContext } from "../contexts/GameControlContext";
import GameResetButton from "../features/game-control/GameResetButton";
import MessageBoard from "../features/game-control/MessageBoard";
import NewGameButton from "../features/game-control/NewGameButton";
import Card from "../ui/Card";
import Title from "../ui/Title";

export default function EndGameResult() {
  const {data: gameData} = useGameControlContext()

  return (
    <section className="flex justify-center items-center h-full bg-full ">
        <Card title={<Title title={`${gameData.winner} won the game!`} headingNumber={2} type="neon" customStyles="text-accent"/>} customStyle="color-accent ">
            <div className="text-xl text-white flex gap-2 justify-center flex-col">
            <div className="flex justify-center">
            <Title title={'Miss shots:'} headingNumber={3} type="neon" customStyles="text-xl"/>
            <span>{gameData.userResults.missedShots}</span>
            </div>
            <div className="flex justify-center">
            <Title title={'Accurate shots:'} headingNumber={3} type="neon" customStyles="text-xl"/>
            <span>{gameData.userResults.accurateShots}</span>
            </div>
            </div>
            <div>
            <MessageBoard />
            </div>
            <div className="flex justify-center gap-4">
              <GameResetButton />
              <NewGameButton />
            </div>
        </Card>
    </section>
  )
}
