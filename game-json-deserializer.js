import { Game } from './game.js'

export class GameJsonDeserializer {
    constructor(json) {
        this.json = json;
    }

    deserialize() {
        const data = JSON.parse(this.json);
        const game = new Game(data.playerOneName, data.playerTwoName);

        const columnIndices = [5, 5, 5, 5, 5, 5, 5];
        let playerTurn = 1;
        while (columnIndices.some(x => x !== -1)) {
            for (let columnIndex = 0; columnIndex < 7; columnIndex += 1) {
                const rowIndex = columnIndices[columnIndex];
                if (rowIndex === -1) continue;

                const tokenValue = data.tokens[rowIndex][columnIndex];
                if(tokenValue === null) {
                    columnIndices[columnIndex] -= 1;
                }

                if (tokenValue === playerTurn) {
                    game.playInColumn(columnIndex);
                    columnIndices[columnIndex] -= 1;
                    if (playerTurn === 1) {
                        playerTurn = 2;
                    } else {
                        playerTurn = 1;
                    }
                }
            }
        }

        return game;
    }
}
