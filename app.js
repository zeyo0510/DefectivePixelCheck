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
        shadow.innerHTML = this.render();
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

    render()
    {
      return `
      <slot></slot>
      `;
    }
  }
  globalThis.customElements.define(name, globalThis.zeyo.App);
})('zeyo-app');