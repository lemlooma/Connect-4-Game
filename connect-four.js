import { Game } from './game.js';

let game = undefined; 

function updatedUi() {
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");

    if( game === undefined) {
        boardHolder.classList.add("is-invisible");

    }else {
        boardHolder.classList.remove("is-invisble");
        gameName.innerHTML = game.gameName()
    }
}

window.addEventListener("DOMContentLoaded", () => {
const name1 = document.getElementById("player-1-name");
const name2 = document.getElementById("player-2-name");
const newGameButt = document.getElementById("new-game");

function enabledButt () {
    let name1Val =name1.value;
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
        updatedUi()
    })
    
})