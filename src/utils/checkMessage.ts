import commands from "../data/commands";

function getMessage(command: string) {
    const cleanCommand = command.trim().replaceAll(' ', '')
    let correspondingMessage ;
    Object.keys(commands).forEach((command: string) => {
        if (cleanCommand === command.trim().replaceAll(' ', '')) correspondingMessage = commands[command]
    })
    return correspondingMessage ?? 'Error: please enter a valid command'
}

export {getMessage}