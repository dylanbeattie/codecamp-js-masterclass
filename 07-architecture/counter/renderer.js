export default class Renderer {
    constructor(shadowRoot) {
        this.shadowRoot = shadowRoot;
    }

    render(engine) {
        const link = document.createElement('link');
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "counter.css");
        link.setAttribute("type", "text/css");
        this.shadowRoot.appendChild(link);

        let wrapper = document.createElement('div');
        wrapper.setAttribute("class", "counter-wrapper");
        this.incrementButton = document.createElement('button');
        this.incrementButton.innerHTML = '▲';
        this.decrementButton = document.createElement('button');
        this.decrementButton.innerHTML = '▼';
        this.span = document.createElement('span');
        this.span.setAttribute("id", "counter");        
        let counter = document.createElement('div');
        counter.setAttribute("class", "counter");
        counter.appendChild(this.span);
        wrapper.appendChild(this.decrementButton);
        wrapper.appendChild(counter);
        wrapper.appendChild(this.incrementButton);
        this.resetButton = document.createElement('button');
        this.resetButton.setAttribute('id', 'reset-button');
        this.resetButton.innerHTML = 'Reset';
        wrapper.appendChild(this.resetButton);
        this.shadowRoot.appendChild(wrapper);
        this.update(engine);
    }
    update(engine) {
        this.span.innerHTML = engine.count;
    }
}