export class DiagonalWinInspector {
    constructor(columns) {
        this.columns = columns
    }
    inspect() {
        for (let i = 0; i < 3; i++) {
            let firstToken = this.columns[0].getTokenAt(i);
            let secondToken = this.columns[1].getTokenAt(i + 1);
            let thirdToken = this.columns[2].getTokenAt(i + 2);
            let fourthToken = this.columns[3].getTokenAt(i + 3);

            if ( firstToken === secondToken &&
                secondToken === thirdToken &&
                thirdToken === fourthToken &&
                firstToken !== null ) {

                return firstToken;
            }

            firstToken = this.columns[0].getTokenAt(i + 3);
            secondToken = this.columns[1].getTokenAt(i + 2);
            thirdToken = this.columns[2].getTokenAt(i + 1);
            fourthToken = this.columns[3].getTokenAt(i);

            if ( firstToken === secondToken &&
                secondToken === thirdToken &&
                thirdToken === fourthToken &&
                firstToken !== null ) {

                return firstToken;
            }
        }

        return 0;
    }
}
