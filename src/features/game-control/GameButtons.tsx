import Card from '../../ui/Card'
import GameResetButton from './GameResetButton'
import GameSurrenderButton from './GameSurrenderButton'


export default function GameButtons() {

  return (

        <Card
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex justify-center gap-5">
          <GameResetButton />
          <GameSurrenderButton />
        </div>
      </Card>
  )
}
