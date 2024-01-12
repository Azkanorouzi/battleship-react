import Card from "../../ui/Card";
import Title from "../../ui/Title";
import commands from "../../data/commands";
import ScrollableContainer from "../../ui/ScrollableContainer";
import InfoBox from "../../ui/InfoBox";
import TitleContainer from "./TitleContainer";
import instructions from "../../data/howToPlay";
import Button from "../../ui/Button";
import { useUIControl } from "../../contexts/UIControlCotext";


export default function GameInfo() {
    const {dispatch} = useUIControl()
  return (
    <section className="absolute top-0 left-0 right-0 bottom-0 flex justify-center lg:items-center z-10 bg-primary bg-opacity-40 backdrop-blur-lg h-screen overflow-y-scroll text-white">
    <Card title={<section className="flex justify-between"><Title type="neon" headingNumber={2} title="Game info" customStyles="text-accent"></Title> <Button type="neon" text="X" customStyles="bg-accent btn-circle" onClick={() => {
        dispatch({type: 'toggleInfo', payLoad: ''})
    }}></Button></section>} customStyle="overflow-scroll">
        <ScrollableContainer customStyle="">
            <TitleContainer>
                <Title type="neon" headingNumber={3} title="commands"></Title>
            </TitleContainer>
            <div className="pt-16">
            {Object.entries(commands).map(([key, value]) => 
                <InfoBox title={<Title type="neon" headingNumber={4} title={<code>{key}</code>}></Title>} info={value}/>
            )}
            </div>
        </ScrollableContainer>
        <ScrollableContainer customStyle="max-w-5xl lg:h-60">
            <TitleContainer>
                <Title type="neon" headingNumber={3} title="Instructions"></Title>
            </TitleContainer>
            <div className="pt-16 overflow-hidden overflow-y-scroll h-96">
            <InfoBox title={<Title type="neon" headingNumber={4} title='how to play'></Title>} info={<p className="text-xl ">{instructions}</p>}/>
            </div>
        </ScrollableContainer>
    </Card>
  </section>
  )
}
