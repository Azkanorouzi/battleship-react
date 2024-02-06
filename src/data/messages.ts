const messages = {
    initial: 'Welcome! this is  an implementation of battleship game, to start the game you can write the start command, or get more info by clicking on the ? button next to the terminal.',
    restart: 'Another game? ',
    startGame: "Let's start the game",
    details: 'this is a terminal based implementation of battleship game, to start the game you can write the start command, or get more info by clicking on the ? button next to the terminal.',
    whoAreYou: 'A human',
    whoAmI: 'Computer',
    greetings: 'I do not say hi to a human',
    randomFills: "Yeah no need to make me wait, I'm the winner after all :)",
    boardInfo: 'I can put your stupid ships on the board if you want!',
    put: 'Putting the ship on the specified location',
    instructions: "In this game you must first position your ships on the board, when the game starts you won't be able to see where the enemy's ships are located, so the best thing you can do is guess! turn will switch on every try, unless you're shot is accurate, in that case you'll have another chance to shoot again, the first player destroying all of the other player's ship would be considered the winner!",
    mode: {
        easy: ["Oh really? why scared? im just a computer.", "uhh no another boring game again"],
        normal: ["Lets see if you can fight half my powers.", "Yeah, let's just fight"],
        hard: ["Can you save human kind by defeating me? I don't think so :)", "There's no chance for you to win! The sea is mine!"]
    },
    preparation: {
        initial: ["Let's get ready to fight, make sure you're thinking about where you're putting your ships on the board, 'cause i'm really good at spotting them ;)", "Get ready to lose! cause you've no chance against my brilliance ;)"],
        finished: ["Finally! I was getting tired waiting for your inferior cpu", "Oh thank god, you're too slow in thinking"],
        reset: ["Oh really? please don't make me wait :(", "Yeah Yeah, Reset the board, you really thought i don't know?"]
    },
    fire: {
        userAccurate: ['Oh no you got me on this!', 'Looks like you have some brain powers', 'That one was really lucky', 'I wish i had just a tiny little bit of your luckiness'],
        userInAccurate: ["Haha now it's your turn to face my powers", "Enough! now it's my turn", "You'll lose!", "I will destroy every single one of your ships!"],
        enemyAccurate: ["BOOOOOM! That's was a brilliant shot", "See how smart i am?", "Another accurate shot!", 'Surrender or i will have no mercy for you'],
        enemyInAccurate: ["ahhh, you're so lucky!", "NOOOOO! not again", 'Why Why?', 'Oh shoot! that was not a ship :('],
        details: 'With this command you can shot my board through the terminal'
    },
    winner: {
        user: ["Maybe you're better than me after all :(", "I'm sorry i insulted my creators :(", "I will come back and destroy human race!"],
        enemy: ["I will rule forever!", "The sea is mine :)", "You're no threat to me!"]
    }
}

export default messages;