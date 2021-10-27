export default class CountingEngine {    
    constructor(count) {
        this.initialValue = parseInt(count) || 0;
        this.reset();        
    }
    increment() {
        this.count++;
    }
    decrement() {
        this.count--;
        if (this.count < 0) this.count = this.initialValue;
    }    
    reset() {
        this.count = this.initialValue;
    }
}