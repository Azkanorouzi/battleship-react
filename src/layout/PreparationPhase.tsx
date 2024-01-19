import Board from "../features/game-board/Board";
import ShipPicker from "../features/ship/ShipPicker";
import TerminalControl from "../features/game-control/TerminalControl";
import PreparationButtons from "../features/game-control/PreparationButtons";

export default function PreparationPhase() {

  return (
    <section className="flex gap-6 flex-col lg:flex-row ">
        <Board type={'user'}/>
        <section className="flex flex-col gap-2 ">
          <ShipPicker />
          <TerminalControl />
          <PreparationButtons />
        </section>
    </section>
  );
}
