import { HTML5Backend } from "react-dnd-html5-backend";

import Board from "../features/game-board/Board";
import ShipPicker from "../features/ship/ShipPicker";
import TerminalControl from "../features/game-control/TerminalControl";
import { DndProvider } from "react-dnd";
import PreparationButtons from "../features/game-control/PreparationButtons";

export default function PreparationPhase() {
  return (
    <section className="flex gap-6 flex-col lg:flex-row ">
      <DndProvider backend={HTML5Backend}>
        <Board />
        <section className="flex flex-col gap-2 ">
          <ShipPicker />
          <TerminalControl />
          <PreparationButtons />
        </section>
      </DndProvider>
    </section>
  );
}
