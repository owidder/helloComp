class HelloElement extends HTMLElement {

    constructor() {
        super();
        const div = document.createElement("div");
        div.innerHTML = "Hello " + this.getAttribute("hello");
        this.appendChild(div);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log("hello!!! " + attrName + oldVal + newVal);
        console.log(this.getAttribute("hello"));
    }
}

HelloElement.obsvervedAttributes = ["hello"];

customElements.define("hello-world", HelloElement);
