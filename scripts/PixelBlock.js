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
    //////////////////////////////////////////////////
    , '032,000,000'
    , '064,000,000'
    , '096,000,000'
    , '128,000,000'
    , '160,000,000'
    , '192,000,000'
    , '224,000,000'
    , '255,000,000'
    //////////////////////////////////////////////////
    , '032,016,000'
    , '064,032,000'
    , '096,048,000'
    , '128,064,000'
    , '160,080,000'
    , '192,096,000'
    , '224,112,000'
    , '255,128,000'
    //////////////////////////////////////////////////
    , '032,032,000'
    , '064,064,000'
    , '096,096,000'
    , '128,128,000'
    , '160,160,000'
    , '192,192,000'
    , '224,224,000'
    , '255,255,000'
    //////////////////////////////////////////////////
    , '000,032,000'
    , '000,064,000'
    , '000,096,000'
    , '000,128,000'
    , '000,160,000'
    , '000,192,000'
    , '000,224,000'
    , '000,255,000'
    //////////////////////////////////////////////////
    , '000,032,016'
    , '000,064,032'
    , '000,096,048'
    , '000,128,064'
    , '000,160,080'
    , '000,192,096'
    , '000,224,112'
    , '000,255,128'
    //////////////////////////////////////////////////
    , '000,032,032'
    , '000,064,064'
    , '000,096,096'
    , '000,128,128'
    , '000,160,160'
    , '000,192,192'
    , '000,224,224'
    , '000,255,255'
    //////////////////////////////////////////////////
    , '000,000,032'
    , '000,000,064'
    , '000,000,096'
    , '000,000,128'
    , '000,000,160'
    , '000,000,192'
    , '000,000,224'
    , '000,000,255'
    //////////////////////////////////////////////////
    , '016,000,032'
    , '032,000,064'
    , '048,000,096'
    , '064,000,128'
    , '080,000,160'
    , '096,000,192'
    , '112,000,224'
    , '128,000,255'
    //////////////////////////////////////////////////
    , '032,000,032'
    , '064,000,064'
    , '096,000,096'
    , '128,000,128'
    , '160,000,160'
    , '192,000,192'
    , '224,000,224'
    , '255,000,255'
    //////////////////////////////////////////////////
    ]

    #i = 0;

    #block = undefined;

    constructor()
    {
      super();
      /************************************************/
      console.log('PixelBlock: constructor');
      /************************************************/
      const dom = new DOMParser();
      const svgDoc = dom.parseFromString(`
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect id="pixel" x="0" y="0" width="100%" height="100%"/>
      Sorry, your browser does not support inline SVG.
      </svg>
      `, "image/svg+xml");
      //////////////////////////////////////////////////
      svgDoc.documentElement.style.position = 'absolute',
      svgDoc.documentElement.style.inset    = '0px auto auto 0px',
      svgDoc.documentElement.style.margin   = '0px 0px 0px 0px',
      svgDoc.documentElement.style.border   = '0px 0px 0px 0px',
      svgDoc.documentElement.style.padding  = '0px 0px 0px 0px',
      svgDoc.documentElement.style.width    = '100vw',
      svgDoc.documentElement.style.height   = '100vh';
      //////////////////////////////////////////////////
      const pixel = svgDoc.documentElement.getElementById("pixel");
      pixel.addEventListener('click', (e) =>
      {
        this.changeColor(pixel);
      });
      //////////////////////////////////////////////////
      const shadow = this.attachShadow({mode: 'closed'});
      {
        shadow.appendChild(svgDoc.documentElement);
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

    changeColor(sender)
    {
      this.#i = (this.#i + 1) % this.#color.length;
      sender.setAttribute("fill", "rgb(" + this.#color[this.#i] + ")");
    }
  }
  globalThis.customElements.define(name, globalThis.zeyo.PixelBlock);
})('zeyo-pixelblock');
/************************************************/
export default globalThis.zeyo.PixelBlock;