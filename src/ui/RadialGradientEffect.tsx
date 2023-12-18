

export default function RadialGradientEffect({color1, color2} : {color1: string, color2: string}) {
  return (
    <div style={{backgroundImage: `radial-gradient(${color1}, ${color2}`}} className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-xl" ></div>
  )
}
