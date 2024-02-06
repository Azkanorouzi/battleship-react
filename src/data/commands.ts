interface Commands {
    [key: string]: string;
  }
const commands : Commands = {
    'game start --easy' : 'Starting the game in easy mode',
    'game start --normal' : 'Starting the game in normal mode',
    'game start --hard' : 'Starting the game in hard mode',
    'game start -e' : 'Starting the game in easy mode',
    'game start -n' : 'Starting the game in normal mode',
    'game start -h' : 'Starting the game in hard mode',
    'game start': 'Starting the game in normal mode',
    'game surrender': 'Surrendering the game',
    'game restart': 'Restarts the game',
    'game': 'Shows some detail about the game',
    'help': 'Shows the instructions about the game',
    'whoAmI': 'who are you?',
    'whoAreYou': 'who am i?',
    'hi': 'hi back to you :)',
    'board reset': 'Resets the board',
    'board confirm': 'Confirms the board',
}
export default commands