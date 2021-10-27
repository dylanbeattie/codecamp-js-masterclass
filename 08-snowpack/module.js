import { Greeting } from './greetings.js';

export default class HelloWorldElement extends HTMLElement {
    connectedCallback() {
        var h1 = document.createElement("h1");
        h1.innerText = Greeting;
        this.appendChild(h1);
    }
}

customElements.define("hello-world", HelloWorldElement);