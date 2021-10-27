class Cell {
    constructor(row,col, engine) {
        this.row = row;
        this.col = col;
        this.engine = engine;
    }

    okToFall() {
        return this.engine.canWeMoveIntoCell(this.row + 1, this.col);
    }
    fall() {
        let ok = this.okToFall();
        if (ok) this.row++;
        return(ok);
    }

    moveLeft() {        
        if (this.engine.canWeMoveIntoCell(this.row, this.col - 1)) this.col--;
    }

    moveRight() {
        if (this.engine.canWeMoveIntoCell(this.row, this.col + 1)) this.col++;
    }
}

class Block {
    constructor(row, col,engine) {        
        this.cells = new Array();
        this.cells.push(new Cell(row, col, engine));
    }
    fall() {
        if (this.cells.every(cell => cell.okToFall())) {
            this.cells.forEach(cell => cell.fall());
            return true;
        }
        return false;
    }
    isOccupyingCell(row,col) {
        return this.cells.some(c => c.row == row && c.col == col);
    }

    moveLeft() {
        this.cells.forEach(cell => cell.moveLeft());
    }
    
    moveRight() {
        this.cells.forEach(cell => cell.moveRight());
    }
    clearRow(row) {
        this.cells = this.cells.filter(c => c.row != row);
    }
}

export default class TetrisEngine {
    constructor(rows, cols) {
        this.rows = parseInt(rows) || 20;
        this.cols = parseInt(cols) || 10;
        this.fallingBlock = null;
        this.settledBlocks = new Array();
    }

    get blocks() {
        return this.settledBlocks.concat(this.fallingBlock);
    }

    addBlock() {        
        this.fallingBlock = new Block(0, Math.ceil(this.cols/2), this);
    }

    fall() {
        if (this.fallingBlock.fall()) return(true);
        for(var row = this.rows-1; row>= 0; row--) {
            while(this.clearRow(row));
        }
        this.settledBlocks.push(this.fallingBlock);
        this.addBlock();
    }
    moveLeft() {
        this.fallingBlock.moveLeft();
    }

    moveRight() {
        this.fallingBlock.moveRight();
    }    

    clearRow(row) {
        for(var col = 0; col < this.cols; col++) {
            if (! this.blocks.some(block => block.isOccupyingCell(row,col))) return(false);
        }
        this.blocks.forEach(block => block.clearRow(row));
        this.blocks.forEach(block => block.fall());
    }

    canWeMoveIntoCell(row, col) {
        if (row < 0) return false;
        if (col < 0) return(false);
        if (row >= this.rows) return(false);
        if (col >= this.cols) return(false);
        if(this.settledBlocks.some(block => block.isOccupyingCell(row,col))) return(false);
        return(true);
    }
}