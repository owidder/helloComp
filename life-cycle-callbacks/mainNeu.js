// Create a class for the element
class Square extends HTMLElement {
    // Specify observed attributes so that
    // attributeChangedCallback will work
    static get observedAttributes() {
        return ['c', 'l'];
    }

    constructor() {
        // Always call super first in constructor
        super();

        const div = document.createElement('div');
        const style = document.createElement('style');
        this.appendChild(style);
        this.appendChild(div);
    }

    updateStyle() {
        document.querySelector('style').textContent = `
            div {
              width: ${this.getAttribute('l')}px;
              height: ${this.getAttribute('l')}px;
              background-color: ${this.getAttribute('c')};
            }`
    }

    connectedCallback() {
        console.log('Custom square element added to page.');
        this.updateStyle(this);
    }

    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }

    adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom square element attributes changed.');
        this.updateStyle();
    }
}

customElements.define('custom-square', Square);
