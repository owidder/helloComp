class HelloElement extends HTMLElement {

    static get obsvervedAttributes() {
        return ["hello"];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        const div = createElement("div");
        div.innerHTML = "Hello World";
        this.appendChild(div);
    }

    attributeChangedCallback() {
        console.log(this.getAttribute("hello"));
    }
}

customElements.define("hello-world", HelloElement);
