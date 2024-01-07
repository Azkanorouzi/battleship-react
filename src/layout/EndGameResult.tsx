import Card from "../ui/Card";
import Title from "../ui/Title";

export default function EndGameResult() {
  return (
    <section className="flex justify-center items-center h-full bg-full ">
        <Card title={<Title title={'Player 1 won the game!'} headingNumber={2} type="neon" customStyles="text-accent"/>} customStyle="color-accent ">
            <div className="text-xl text-white flex gap-2 justify-center flex-col">
                <div className="flex justify-center">
            <Title title={'Duration:'} headingNumber={3} type="neon" customStyles="text-xl"/>
            <span>10</span>
            </div>
            <div className="flex justify-center">
            <Title title={'Winner:'} headingNumber={3} type="neon" customStyles="text-xl"/>
            <span>10</span>
            </div>
            <div className="flex justify-center">
            <Title title={'Score:'} headingNumber={3} type="neon" customStyles="text-xl"/>
            <span>10</span>
            </div>
            <div className="flex justify-center">
            <Title title={'Highest score:'} headingNumber={3} type="neon" customStyles="text-xl"/>
            <span>10</span>
            </div>
            </div>
            
        </Card>
    </section>
  )
}
