import { Column } from "./column.js";
import { ColumnWinInspector } from './column-win-inspector.js'

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

    checkForColumnWin() {
        for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
            const column = this.columns[columnIndex];
            const columnInspect = new ColumnWinInspector(column);
            columnInspect.inspect();
            if (this.winnerNumber === 1 || this.winnerNumber === 2) {
                this.winnerNumber = winnerNumber
            }
            break;
        }
    }

    getName() {
        if (this.winnerNumber === 1) {
            return `${this.playerOneName} wins!`

        } else if (this.winnerNumber === 2) {

            return `${this.playerTwoName} wins!`
        }else if (this.winnerNumber === 3) {

            return `${this.playerOneName} ties with ${this.playerTwoName}!`
        }
        return `${this.playerOneName} VS ${this.playerTwoName}`;
    }

    isColumnFull(columnIndex) {
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }
        return this.columns[columnIndex].isFull();
    }

    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer)
        this.checkForTie()
        this.checkForColumnWin()
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
