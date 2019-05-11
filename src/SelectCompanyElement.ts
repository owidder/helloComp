class SelectCompanyElement extends HTMLElement {

    static get observedAttributes() {
        return ["initialShort"];
    }

    constructor() {
        super();
        const div = document.createElement("div");
        this.appendChild(div);
        console.log("C: " + this.getAttribute("initialShort"))
        this.update();
    }

    update() {
        const div = document.querySelector("div");
        div.innerHTML = this.getAttribute("initialShort");
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log("attributeChangedCallback");
        this.update();
    }
}

customElements.define("select-company", SelectCompanyElement);

