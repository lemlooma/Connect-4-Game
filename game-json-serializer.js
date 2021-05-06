export class GameJsonSerializer {
    constructor(game) {
        this.game = game;
    }

    serialize() {
        const data = {
            playerOneName: this.game.playerOneName,
            playerTwoName: this.game.playerTwoName,
            tokens: [ [], [], [], [], [], []]
        }

        for (let rowIndx = 0; rowIndx < 6; rowIndx += 1) {
            for (let columnIndx = 0; columnIndx < 7; columnIndx += 1) {
                const tokenValue = this.game.getTokenAt(rowIndx, columnIndx);
                data.tokens[rowIndx][columnIndx] = tokenValue;
            }
        }

        return JSON.stringify(data);
    };

}
