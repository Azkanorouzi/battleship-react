import MainContainer from "./MainContainer";
import BackgroundSplitDecor from '../ui/BackgroundSplitDecor';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreparationPhase from "./PreparationPhase";
import InitialPhase from "./InitialPhase";
import BattlePhase from "./BattlePhase";
import EndGameResult from "./EndGameResult";
import NotFound from "./NotFound";




export default function AppLayout() {
  return <BrowserRouter>
  <MainContainer>
    <Routes>
      <Route path="/" index element={<InitialPhase />}/>
      <Route path="/preparation" element={<PreparationPhase />}></Route>
      <Route path="/battleship" element={<BattlePhase />}></Route>
      <Route path="/endgame" element={<EndGameResult />}></Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <BackgroundSplitDecor></BackgroundSplitDecor>
    
  </MainContainer>
  </BrowserRouter>
}
