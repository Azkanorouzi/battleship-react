import React from "react"

export default function MainContainer({children}: {children :React.ReactNode}) {
  return (
    <main className="w-screen h-screen bg-gradient-to-tr grid lg:place-content-center gap-4 ">
      {/* <GameInfo /> */}
      {children}
    </main>
  )
}
