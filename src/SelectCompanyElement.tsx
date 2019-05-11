// @ts-ignore
import * as React from "react";
import * as ReactDOM from "react-dom";

const scriptPath = document.currentScript.getAttribute("src");

class SelectCompanyElement extends HTMLElement {

    static get observedAttributes() {
        return ["initialShort"];
    }

    constructor() {
        super();
    }

    drawReactComponent() {
        ReactDOM.render(<div>{this.getAttribute("initialShort")}</div>, this);
    }

    connectedCallback() {
        this.drawReactComponent();
    }

    attributeChangedCallback() {
        console.log("attributeChangedCallback");
        this.drawReactComponent();
    }
}

customElements.define("select-company", SelectCompanyElement);

