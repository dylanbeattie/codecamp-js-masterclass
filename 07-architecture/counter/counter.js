import Renderer from './renderer.js';
import CountingEngine from './engine.js';

class MyCounterElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });        
        this.renderer = new Renderer(this.shadowRoot);
    }

    connectedCallback() {
        let initialValue = parseInt(this.getAttribute("initial-value"));
        this.engine = new CountingEngine(initialValue);
//        this.initialCount = this.count;
        this.renderer.render(this.engine);
        document.addEventListener("keydown", this.handleKeydown.bind(this));
        this.renderer.incrementButton.addEventListener("click", this.incrementButtonClick.bind(this));
        this.renderer.decrementButton.addEventListener("click", this.decrementButtonClick.bind(this));
        this.renderer.resetButton.addEventListener("click", this.resetButtonClick.bind(this));
    }

    incrementButtonClick(event) {
        this.engine.increment();
        this.renderer.update(this.engine);
    }

    decrementButtonClick(event) {
        this.engine.decrement();
        this.renderer.update(this.engine);
    }
    resetButtonClick(event) {
        this.engine.reset();
        this.renderer.update(this.engine);
    }

    handleKeydown(event) {
        switch (event.code) {
            case "ArrowUp": 
                this.engine.increment();
                this.renderer.update(this.engine);
                event.preventDefault();
                event.stopPropagation();
                return false;
            case "ArrowDown":
                this.engine.decrement();
                this.renderer.update(this.engine);
                event.preventDefault();
                event.stopPropagation();
                return false;
            default: return;
        }
    }
}

customElements.define("my-counter", MyCounterElement);