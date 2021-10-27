import * as html from './html.js';

export default class Renderer {
    constructor(shadowRoot) {
        this.root = shadowRoot;
    }
    render(counterEngine) {

        const cssLink = html.element('link', { type: "text/css", rel: "stylesheet", href: "counter.css" });
        this.root.appendChild(cssLink);
    
        let wrapper = html.element('div', { 'class': 'counter-wrapper' });

        this.incrementButton = html.element('button', {}, '▲');
        this.decrementButton = html.element('button', {}, '▼');
        wrapper.appendChild(this.decrementButton);

        this.span = html.element('span', { id: "counter" }, counterEngine.count);
        let counter = html.element('div', { "class": "counter" });
        counter.appendChild(this.span);
        wrapper.appendChild(counter);

        wrapper.appendChild(this.incrementButton);

        this.resetButton = html.element('button', { 'id': 'reset-button' }, 'Reset');
        wrapper.appendChild(this.resetButton);
        this.root.appendChild(wrapper);
    }

    update(counterEngine) {
        this.span.innerHTML = counterEngine.count;
    }
}