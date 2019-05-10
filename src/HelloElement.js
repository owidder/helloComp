class HelloElement extends HTMLElement {

    static get obsvervedAttributes() {
        return ["hello"];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        const div = document.createElement("div");
        div.innerHTML = "Hello " + this.getAttribute("hello");
        this.appendChild(div);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log("hello!!! " + attrName + oldVal + newVal);
        console.log(this.getAttribute("hello"));
    }
}

customElements.define("hello-world", HelloElement);
