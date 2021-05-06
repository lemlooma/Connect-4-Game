import { Game } from './game.js';
import { GameJsonDeserializer } from './game-json-deserializer.js'
import { GameJsonSerializer } from './game-json-serializer.js'
let game = undefined;
let clickTarget = document.getElementById("click-targets");
const json = window.localStorage.getItem('connect-four')

if (json) {
    const deserializer = new GameJsonDeserializer(json);
    game = deserializer.deserialize();
    updatedUi()
}


function updatedUi() {
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");

    //*** this loop checks if the column is full */
    for(let columnIndex = 0; columnIndex <= 6; columnIndex += 1){
        const isColumnFull = game.isColumnFull(columnIndex);
        const columnId = `column-${columnIndex}`;
        const column = document.getElementById(columnId)

        if(isColumnFull) {
            column.classList.add('full');
        } else {
            column.classList.remove('full');
        };
    }

    //*** this loop appends the token to each square depending on click */
    for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
        for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
            let square = document.getElementById(`square-${[rowIndex]}-${[columnIndex]}`);
            square.innerHTML = '';

            const playerNumber = game.getTokenAt(rowIndex, columnIndex)

            if (playerNumber === 1) {
                const token = document.createElement('div')
                token.classList.add('black')
                token.classList.add('token')
                square.appendChild(token);
            } else if (playerNumber === 2) {
                const token = document.createElement('div')
                token.classList.add('red')
                token.classList.add('token')
                square.appendChild(token);
            }
        }
    }


    if( game === undefined) {
        boardHolder.classList.add("is-invisible");

    }else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName()
        const currentPlayer = game.currentPlayer;

        if (currentPlayer === 1) {
            clickTarget.classList.add('black');
            clickTarget.classList.remove('red');
        } else {
            clickTarget.classList.add('red');
            clickTarget.classList.remove('black');
        }
    }
}


window.addEventListener("DOMContentLoaded", () => {
    const name1 = document.getElementById("player-1-name");
    const name2 = document.getElementById("player-2-name");
    const newGameButt = document.getElementById("new-game");


    function enabledButt () {
        let name1Val = name1.value;
        let name2Val = name2.value;

        newGameButt.disabled = name1Val.length === 0 || name2Val.length === 0
    }

    name1.addEventListener("keyup", (event) => {
        enabledButt()
    })

    name2.addEventListener("keyup", (event) => {
        enabledButt()
    })

    newGameButt.addEventListener('click', (event)=> {
        game = new Game(name1.value, name2.value);
        name1.value = "";
        name2.value = "";
        enabledButt()
        updatedUi();
    })

    clickTarget.addEventListener("click", event => {
        const target = event.target.id;
        if (!target.startsWith('column-')) return;

        const columnIndex = Number.parseInt(target[target.length - 1]);
        game.playInColumn(columnIndex);

        const json = serializer.serialize();
        window.localStorage.setItem('connect-four', json)

        updatedUi();
    })

})
