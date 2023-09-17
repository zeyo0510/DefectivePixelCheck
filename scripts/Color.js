((name) => {
  /************************************************/
  globalThis.zeyo = globalThis.zeyo || {};
  /************************************************/
  globalThis.zeyo.Color = class $ extends HTMLElement
  {
    /************************************************/
    #red   = 0;
    /************************************************/
    #green = 0;
    /************************************************/
    #blue  = 0;
    /************************************************/
    constructor()
    {
      super();
    }
    /************************************************/
    connectedCallback()
    {
      
    }
    /************************************************/
    disconnectedCallback()
    {

    }
    /************************************************/
    adoptedCallback()
    {

    }
    /************************************************/
    attributeChangedCallback(name, oldValue, newValue)
    {
      this.red   = (name == 'red  '.trim()) ? Number(newValue) : this.red  ;
      this.green = (name == 'green'.trim()) ? Number(newValue) : this.green;
      this.blue  = (name == 'blue '.trim()) ? Number(newValue) : this.blue ;
    }
    /************************************************/
    static get observedAttributes()
    {
      return ['red', 'green', 'blue'];
    }
    /************************************************/
    get red()
    {
      return this.#red;
    }
    /************************************************/
    set red(value)
    {
      var a = any;
      value = (value <   0) ?   0 : value;
      value = (value > 255) ? 255 : value;
      //////////////////////////////////////////////////
      this.#red = value;
    }
    /************************************************/
    get green()
    {
      return this.#green;
    }
    /************************************************/
    set green(value)
    {
      value = (value <   0) ?   0 : value;
      value = (value > 255) ? 255 : value;
      //////////////////////////////////////////////////
      this.#green = value;
    }
    /************************************************/
    get blue()
    {
      return this.#blue;
    }
    /************************************************/
    set blue(value)
    {
      value = (value <   0) ?   0 : value;
      value = (value > 255) ? 255 : value;
      //////////////////////////////////////////////////
      this.#blue = value;
    }
    /************************************************/
    meta()
    {
      const retValue = {};
      //////////////////////////////////////////////////
      retValue.red   = this.red  ;
      retValue.green = this.green;
      retValue.blue  = this.blue ;
      //////////////////////////////////////////////////
      return retValue;
    }
    /************************************************/
    toHex()
    {
      const r = this.red  .toString(16).padStart(2, '0');
      const g = this.green.toString(16).padStart(2, '0');
      const b = this.blue .toString(16).padStart(2, '0');
      //////////////////////////////////////////////////
      const retValue = `#${r}${g}${b}`;
      //////////////////////////////////////////////////
      return retValue;
    }
    toDecimal()
    {
      const r = this.red  .toString(10).padStart(3, '0');
      const g = this.green.toString(10).padStart(3, '0');
      const b = this.blue .toString(10).padStart(3, '0');
      //////////////////////////////////////////////////
      const retValue = `rgb(${r}, ${g}, ${b})`;
      //////////////////////////////////////////////////
      return retValue;
    }
  }
  /************************************************/
  globalThis.customElements.define(name, globalThis.zeyo.Color);
})('zeyo-color');
/************************************************/
export default globalThis.zeyo.Color;