const boxes = Array.from(document.getElementsByClassName('box')),
      heading = document.getElementById('play-heading'),
      restartBtn = document.getElementById('restartBtn'),
      spaces =[];
let player1 = 'X',
    player2 = 'O',
    currentPlayer = player1;

    
    
//Draw borders
boxes.forEach((box, index) => {
    
    let borderStyle = '';
    
    if (index < 3)
    {
        borderStyle += `border-bottom: 1px solid rgb(177, 8, 8);`;
    }
    if (index % 3 !== 0)
    {
        borderStyle += `border-left: 1px solid rgb(177, 8, 8);`;
    }  if (index >= 6)
    {
        borderStyle += `border-top: 1px solid rgb(177, 8, 8);`;
    }
    
    box.style = borderStyle;
    
    
    box.addEventListener('click', (e) => {
        const id = e.target.id;
        if (!spaces[id]) {
            spaces[id] = currentPlayer;
            e.target.innerText = currentPlayer;
            
            if (playerWin(currentPlayer)) {
                heading.innerText = `${currentPlayer} Win!`
                // return;
            }
            
        }
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    })
    
});


//Check if user win the game.
const playerWin = (player) => {
    
    //Check if user wins from top left.
    if (spaces[0] === player) {
        if (spaces[1] === player && spaces[2] === player) {
            heading.innerText = `${player} Wins`;
        }
        if (spaces[3] === player && spaces[6] === player) {
            heading.innerText = `${player} Wins`;
        }
        if (spaces[4] === player && spaces[8] === player) {
            heading.innerText = `${player} Wins`;
        }   
    }
    
    //Check if user wins from bottom right.
    if(spaces[8] === player) {
        if (spaces[7] === player && spaces[6] === player) {
            heading.innerText = `${player} Wins`;
        }
        if (spaces[5] === player && spaces[2] === player) {
            heading.innerText = `${player} Wins`;
        }   
    }
    
    //Check if user wins from the middle.
    if(spaces[4] === player) {
        if (spaces[1] === player && spaces[7] === player) {
            heading.innerText = `${player} Wins`;
        }   
        if (spaces[3] === player && spaces[5] === player) {
            heading.innerText = `${player} Wins`;
                    }   

                      if (spaces[2] === player && spaces[6] === player) {
                        heading.innerText = `${player} Wins`;
                      }
                    }

                }
                

                //Restart the game.
                restartBtn.addEventListener('click', () => {
                    spaces.forEach((space, index) => {
                        spaces[index] = null;
                    })
                    boxes.forEach((box) => {
                        box.innerText = '';
                    })
                    
                    heading.innerText = `Let's Play`
                    
                    currentPlayer = player1;
                });