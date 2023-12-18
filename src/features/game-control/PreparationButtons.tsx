import Button from "../../ui/Button";
import Card from "../../ui/Card";

export default function PreparationButtons() {
  return (
    <Card
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 1 }}
  >
    <div className="flex justify-center gap-5">
      <Button type="neon" text="Confirm" customStyles="text-accent " />
      <Button type="neon" text="Reset" customStyles="text-secondary" />
    </div>
  </Card>
  )
}
