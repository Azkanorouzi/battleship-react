import React from 'react'
import Card from '../../ui/Card'
import Button from '../../ui/Button'

export default function GameButtons() {
  return (

        <Card
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex justify-center gap-5">
          <Button type="neon" text="Surrender" customStyles="text-accent " />
          <Button type="neon" text="Restart" customStyles="text-secondary" />
          </div>
      </Card>
  )
}
