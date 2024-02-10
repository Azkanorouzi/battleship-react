import { useUIControl } from "../contexts/UIControlCotext";
import Terminal from "../features/game-control/Terminal";
import Button from "../ui/Button";

export default function TerminalContainer() {
  const {dispatch} = useUIControl();
  return (
    <section className="flex gap-2 justify-center items-center">
        <Terminal animate={true}/>
        <Button type='neon' customStyles="btn-circle text-xl text-accent" text="?" onClick={() => {
          dispatch({type: 'toggleInfo', payLoad: ''})
        }}/>
    </section>
  )
}
