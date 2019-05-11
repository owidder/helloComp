class HelloElement extends HTMLElement {

    static get observedAttributes() {
        return ["hello"];
    }

    constructor() {
        super();
        const div = document.createElement("div");
        div.innerHTML = "Hello " + this.getAttribute("hello");
        this.appendChild(div);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log(`${attrName}: ${oldVal} -> ${newVal}`);
        const div = document.querySelector("div");
        div.innerHTML = "Hello " + newVal;
    }
}

customElements.define("hello-world", HelloElement);
