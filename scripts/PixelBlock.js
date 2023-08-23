((name) => {
  globalThis.zeyo = globalThis.zeyo || {};
  globalThis.zeyo.PixelBlock = class $ extends HTMLElement
  {
    #color = [
      '000,000,000'
    , '032,032,032'
    , '064,064,064'
    , '096,096,096'
    , '128,128,128'
    , '160,160,160'
    , '192,192,192'
    , '224,224,224'
    , '255,255,255'
    /*************/
    , '032,000,000'
    , '064,000,000'
    , '096,000,000'
    , '128,000,000'
    , '160,000,000'
    , '192,000,000'
    , '224,000,000'
    , '255,000,000'
    /*************/
    , '032,016,000'
    , '064,032,000'
    , '096,048,000'
    , '128,064,000'
    , '160,080,000'
    , '192,096,000'
    , '224,112,000'
    , '255,128,000'
    /*************/
    , '032,032,000'
    , '064,064,000'
    , '096,096,000'
    , '128,128,000'
    , '160,160,000'
    , '192,192,000'
    , '224,224,000'
    , '255,255,000'
    /*************/
    , '000,032,000'
    , '000,064,000'
    , '000,096,000'
    , '000,128,000'
    , '000,160,000'
    , '000,192,000'
    , '000,224,000'
    , '000,255,000'
    /*************/
    , '000,032,016'
    , '000,064,032'
    , '000,096,048'
    , '000,128,064'
    , '000,160,080'
    , '000,192,096'
    , '000,224,112'
    , '000,255,128'
    /*************/
    , '000,032,032'
    , '000,064,064'
    , '000,096,096'
    , '000,128,128'
    , '000,160,160'
    , '000,192,192'
    , '000,224,224'
    , '000,255,255'
    /*************/
    , '000,000,032'
    , '000,000,064'
    , '000,000,096'
    , '000,000,128'
    , '000,000,160'
    , '000,000,192'
    , '000,000,224'
    , '000,000,255'
    /*************/
    , '016,000,032'
    , '032,000,064'
    , '048,000,096'
    , '064,000,128'
    , '080,000,160'
    , '096,000,192'
    , '112,000,224'
    , '128,000,255'
    /*************/
    , '032,000,032'
    , '064,000,064'
    , '096,000,096'
    , '128,000,128'
    , '160,000,160'
    , '192,000,192'
    , '224,000,224'
    , '255,000,255'
    /*************/
    ]

    #i = 0;

    #block = undefined;

    constructor()
    {
      super();
      /************************************************/
      console.log('PixelBlock: constructor');
      /************************************************/
      // this.#block = document.createElement('div');
      this.#block = document.createElement('div');
      this.#block.style.width           = '100vw';
      this.#block.style.height          = '100vh';
      this.#block.style.position        = 'absolute';
      this.#block.style.inset           = '0px auto auto 0px';
      this.#block.style.margin          = '0px 0px 0px 0px';
      this.#block.style.border          = '0px 0px 0px 0px';
      this.#block.style.padding         = '0px 0px 0px 0px';
      this.#block.addEventListener('click', e => this.test());
      const shadow = this.attachShadow({mode: 'closed'});
      {
        shadow.appendChild(this.#block);
      }
    }

    test()
    {
      this.#i = (this.#i + 1) % this.#color.length;
      this.#block.style.backgroundColor = "rgb(" + this.#color[this.#i] + ")";
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
  globalThis.customElements.define(name, globalThis.zeyo.PixelBlock);
})('zeyo-pixelblock');
/************************************************/
export default globalThis.zeyo.PixelBlock;