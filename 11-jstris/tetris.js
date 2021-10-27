export default class TetrisElement extends HTMLElement{
constructor(){
    super()

    this.attachShadow({mode: 'open'})
}

    connectedCallback(){
        
    }
}

customElements.define('tetris-game', TetrisElement)