class MovieListElement extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDom = this.attachShadow({mode: 'closed'});
    }
    
    connectedCallback() {
        this.shadowDom.innerHTML = `<ul>
            <li id="alien-movie-list-item">Alien</li>
            <li>Back to the Future</li>
            <li>Dirty Dancing</li>
            <li>Jumanji</li>
            <li>Zoolander</li>
        </ul>`;
    }
}
customElements.define("movie-list", MovieListElement);