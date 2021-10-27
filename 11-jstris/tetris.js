import TetrisEngine from "./engine.js";
import Renderer from "./renderer.js";

export default class TetrisElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        let rows = this.getAttribute("rows");
        let cols = this.getAttribute("cols");
        this.engine = new TetrisEngine(rows, cols);
        this.renderer = new Renderer(this.shadowRoot);

        //TODO: replace this with proper gameplay
        this.engine.addBlock();
        this.renderer.render(this.engine);
        document.addEventListener("keydown", this.handleKeydown.bind(this));
    }

    handleKeydown(event) {
        console.log(event.code);
        switch (event.code) {
            case "ArrowLeft":
                this.engine.moveLeft();
                return this.renderer.update(this.engine);
            case "ArrowRight":
                this.engine.moveRight();
                return this.renderer.update(this.engine);
            case "Space":
                this.engine.fall();
                return this.renderer.update(this.engine);
        }
    }
}

customElements.define('tetris-game', TetrisElement)