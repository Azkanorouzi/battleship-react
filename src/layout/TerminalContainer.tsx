import Terminal from "../features/game-control/Terminal";
import Button from "../ui/Button";

export default function TerminalContainer() {
  return (
    <section className="flex gap-2">
        <Terminal animate={true}/>
        <Button type='neon' customStyles="btn-circle text-xl text-accent" text="?"/>
    </section>
  )
}
