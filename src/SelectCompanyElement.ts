class SelectCompanyElement extends HTMLElement {

    static get observedAttributes() {
        return ["initialShort"];
    }

    constructor() {
        super();
        const div = document.createElement("div");
        this.appendChild(div);
        this.update();
    }

    update() {
        const div = document.querySelector("div");
        div.innerHTML = this.getAttribute("initialShort");
    }

    attributeChangedCallback() {
        console.log("attributeChangedCallback");
        this.update();
    }
}

customElements.define("select-company", SelectCompanyElement);

