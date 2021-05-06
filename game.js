import { Column } from "./column.js";
import { ColumnWinInspector } from './column-win-inspector.js'
import { RowWinInspector } from './row-win-inspector.js'
import { DiagonalWinInspector } from './diagnol-win-inspector.js'
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
        if(this.winnerNumber !== 0) return;

        for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
            const column = this.columns[columnIndex];
            const columnInspect = new ColumnWinInspector(column);
            const winnerNum = columnInspect.inspect();
            if (winnerNum === 1 || winnerNum === 2) {
                this.winnerNumber = winnerNum;
                break;
            }
        }
    }

    checkForRowWin() {
        if(this.winnerNumber !== 0) return;

        for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
            const column = this.columns.slice(columnIndex, columnIndex + 4)

            const rowInspect = new RowWinInspector(column)
            const winnerNum = rowInspect.inspect();
            if (winnerNum === 1 || winnerNum === 2) {
                this.winnerNumber = winnerNum;
                break;
            }
        }
    }

    checkForDiagonalWin() {
        if(this.winnerNumber !== 0) return;

        for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
            const column = this.columns.slice(columnIndex, columnIndex + 4)
            const DiagnolInspect = new DiagonalWinInspector(column)
            const winnerNum = DiagnolInspect.inspect();
            if (winnerNum === 1 || winnerNum === 2) {
                this.winnerNumber = winnerNum;
                break;
            }
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
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin();

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
