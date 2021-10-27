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
        this.renderer.render(this.engine);
    }
}

customElements.define('tetris-game', TetrisElement)