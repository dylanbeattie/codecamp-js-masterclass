class Cell {
    constructor(row,col) {
        this.row = row;
        this.col = col;
    }
}
class Block {
    constructor(row, col) {
        this.cells = new Array();
        this.cells.push(new Cell(row, col));
    }
}

export default class TetrisEngine {
    constructor(rows, cols) {
        this.rows = parseInt(rows) || 20;
        this.cols = parseInt(cols) || 10;
        this.blocks = new Array();
    }

    addBlock(row, col) {
        let block = new Block(row, col);
        this.blocks.push(block);
    }
}