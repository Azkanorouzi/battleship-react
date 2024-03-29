import commands from "../data/commands";
// This function will return the corresponding message for a specific
function getMessage(command: string) {
    const cleanCommand = command.trim().split(' ').slice(0,3).join(' ');
    let correspondingMessage ;
    Object.keys(commands).forEach((command: string) => {
        if (cleanCommand === command.trim().split(' ').slice(0,3).join(' ')) correspondingMessage = commands[command]
    })
    return correspondingMessage ?? 'Error: please enter a valid command'
}

export {getMessage}