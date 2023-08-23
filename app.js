import PixelBlock from "./scripts/PixelBlock.js";
/************************************************/
((name) => {
  globalThis.zeyo = globalThis.zeyo || {};
  globalThis.zeyo.App = class $ extends HTMLElement
  {
    constructor()
    {
      super();
      /************************************************/
      console.log('app: constructor');
      /************************************************/
      document.title = 'DefectivePixelCheck';
      /************************************************/
      const shadow = this.attachShadow({mode: 'open'});
      {
        shadow.innerHTML = '<slot><slot>';
      }
    }

    connectedCallback()
    {

    }

    disconnectedCallback()
    {

    }

    adoptedCallback()
    {

    }

    attributeChangedCallback(name, oldValue, newValue)
    {

    }

    static get observedAttributes()
    {
      return [];
    }
  }
  globalThis.customElements.define(name, globalThis.zeyo.App);
})('zeyo-app');