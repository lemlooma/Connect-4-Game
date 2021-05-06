export class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }
    inspect() {
        for (let i = 0; i <= 3; i++) {
            const firstToken = this.column.getTokenAt(i);
            const secondToken = this.column.getTokenAt(i + 1);
            const thirdToken = this.column.getTokenAt(i + 2);
            const fourthToken = this.column.getTokenAt(i + 3);

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
