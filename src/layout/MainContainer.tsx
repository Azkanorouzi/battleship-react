import React from "react"
import { useUIControl } from "../contexts/UIControlCotext"
import GameInfo from "../features/game-control/GameInfo";

export default function MainContainer({children}: {children :React.ReactNode}) {
  const {data} = useUIControl();
  return (
    <main className="w-screen h-screen bg-gradient-to-tr grid lg:place-content-center gap-4 ">
      {children}
      {data.infoOpen && <GameInfo /> }
    </main>
  )
}
