export class RowWinInspector {
    constructor(columns) {
        this.columns = columns
    }
    inspect() {
        for (let i = 0; i < 6; i++) {
            const firstToken = this.columns[0].getTokenAt(i);
            const secondToken = this.columns[1].getTokenAt(i);
            const thirdToken = this.columns[2].getTokenAt(i);
            const fourthToken = this.columns[3].getTokenAt(i);

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
