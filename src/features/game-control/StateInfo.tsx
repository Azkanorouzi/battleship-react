export default function StateInfo({title, accurateShots, lastShot, missedShots}: {title: string, accurateShots: number, lastShot: string, missedShots: number}) {
  const totalShots = accurateShots + missedShots;
  const accuracy = Math.round((accurateShots / totalShots) * 100)
  return (
    <div className="bg-black p-3 rounded-lg">
    <h3 className="text-xl text-accent">{title}</h3>
    <div className="text-sm">
    <p className="text-bold">Missed shots: <span>{missedShots}</span></p> 
    <p>Accurate Shots: <span>{accurateShots}</span></p> 
    <p>Accuracy: <span>{accuracy || 0}%</span></p> 
    <p>Last Shot: <span>{lastShot}</span></p> 
    </div>
    </div>
  )
}
