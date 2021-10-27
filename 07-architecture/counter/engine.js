export default class CountingEngine {
    constructor(initialValue) {
        this.initialValue = initialValue;
        this.count = initialValue;
    }

    increment(){
        this.count++;
    }

    decrement(){
        this.count--;
    }

    reset() {
        this.count = this.initialValue;
    }
}