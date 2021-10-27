class MyCustomComponentElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        let link = document.createElement('link');
        link.setAttribute("type", "text/css");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "my-custom-component.css");
        this.shadowRoot.appendChild(link);
    }

    connectedCallback() {
        let span = document.createElement('span');
        span.innerText = "Look! I'm super stylish!";
        this.shadowRoot.appendChild(span);
    }
}
customElements.define("my-custom-component", MyCustomComponentElement);