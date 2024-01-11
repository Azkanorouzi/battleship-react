
export default function StateInfo({title, shipsLeft, accurateShots, lastShot}: {title: string, shipsLeft: number, accurateShots: number, lastShot: string}) {
  return (
    <>
    <h3 className="text-xl">{title}</h3>
    <div className="text-sm">
    <p>Ships Left: <span>{shipsLeft}</span></p> 
    <p>Accurate Shots: <span>{accurateShots}</span></p> 
    <p>Last Shot: <span>{lastShot}</span></p> 
    </div>
    </>
  )
}
