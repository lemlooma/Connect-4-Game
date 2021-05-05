import { Column } from "./column.js";

export class Game {
    constructor(playerOneName,playerTwoName,) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
        this.columns = [
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
        ];
        this.winnerNumber = 0
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.playerOneName} ties with ${this.playerTwoName}`
        }
        return `${this.playerOneName} VS ${this.playerTwoName}`;
    }

    isColumnFull(columnIndex) {
        return this.columns[columnIndex].isFull();
    }

    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer)
        this.checkForTie()
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
            this.columns[columnIndex];
        }
    }

    checkForTie () {
        if (this.columns.every(t => t.isFull())) {
            this.winnerNumber = 3
        }
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt([rowIndex]);
    }

}
