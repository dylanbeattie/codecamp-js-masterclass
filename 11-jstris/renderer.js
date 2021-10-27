import * as html from './html.js';

export default class Renderer {
    constructor(root) {
        this.root = root;
    }

    render(engine) {
        console.log('Drawing CSS link');
        this.root.appendChild(html.element('link', {
            rel: "stylesheet",
            href: "tetris.css",
            type: "text/css"
        }));
        for(let row = 0; row < engine.rows; row++) {
            let rowDiv = html.element('div');
            for(let col = 0; col < engine.cols; col++) {
                rowDiv.appendChild(html.element('span', { "class" : "cell" }));
            }
            this.root.appendChild(rowDiv);
        }
    }
    update(engine) {

    }
}