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
        this.engine = new TetrisEngine(rows,cols);
        this.renderer = new Renderer(this.shadowRoot);

        //TODO: replace this with proper gameplay
        this.engine.addBlock(2,4);
        this.renderer.render(this.engine);
        document.addEventListener("keypress", this.handleKeypress.bind(this));
    }

    handleKeypress(event) {
        switch (event.code) {
            case "Space":
                return this.renderer.update(this.engine);
        }
    }
}

customElements.define('tetris-game', TetrisElement)