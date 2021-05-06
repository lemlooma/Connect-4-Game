export class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }
    inspect() {
        for (let i = 0; i <= 2; i++) {
            const firstToken = this.column.getTokenAt(i);
            const secondToken = this.column.getTokenAt(i + 1);
            const thirdToken = this.column.getTokenAt(i + 2);
            const fourthToken = this.column.getTokenAt(i + 3);

            if (
                firstToken !== null &&
                firstToken === secondToken &&
                secondToken === thirdToken &&
                thirdToken === fourthToken
            ) {
                return firstToken;
            } else {
                return 0;
            }
        }
    }
}
