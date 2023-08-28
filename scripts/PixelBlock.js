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

    constructor()
    {
      super();
      /************************************************/
      console.log('PixelBlock: constructor');
      /************************************************/
      const dom = new DOMParser();
      const svgDoc = dom.parseFromString(this.render(), 'image/svg+xml');
      const pixel = svgDoc.documentElement.getElementById('pixel');
      //////////////////////////////////////////////////
      svgDoc.documentElement.style.position          = 'absolute'.trim();
      svgDoc.documentElement.style.top               = '0px     '.trim();
      svgDoc.documentElement.style.right             = 'unset   '.trim();
      svgDoc.documentElement.style.bottom            = 'unset   '.trim();
      svgDoc.documentElement.style.left              = '0px     '.trim();
      svgDoc.documentElement.style.marginTop         = 'unset   '.trim();
      svgDoc.documentElement.style.marginRight       = 'unset   '.trim();
      svgDoc.documentElement.style.marginBottom      = 'unset   '.trim();
      svgDoc.documentElement.style.marginLeft        = 'unset   '.trim();
      svgDoc.documentElement.style.borderTopColor    = 'unset   '.trim();
      svgDoc.documentElement.style.borderTopStyle    = 'unset   '.trim();
      svgDoc.documentElement.style.borderTopWidth    = 'unset   '.trim();
      svgDoc.documentElement.style.borderRightColor  = 'unset   '.trim();
      svgDoc.documentElement.style.borderRightStyle  = 'unset   '.trim();
      svgDoc.documentElement.style.borderRightWidth  = 'unset   '.trim();
      svgDoc.documentElement.style.borderBottomColor = 'unset   '.trim();
      svgDoc.documentElement.style.borderBottomStyle = 'unset   '.trim();
      svgDoc.documentElement.style.borderBottomWidth = 'unset   '.trim();
      svgDoc.documentElement.style.borderLeftColor   = 'unset   '.trim();
      svgDoc.documentElement.style.borderLeftStyle   = 'unset   '.trim();
      svgDoc.documentElement.style.borderLeftWidth   = 'unset   '.trim();
      svgDoc.documentElement.style.borderImageSource = 'unset   '.trim();
      svgDoc.documentElement.style.borderImageSlice  = 'unset   '.trim();
      svgDoc.documentElement.style.borderImageWidth  = 'unset   '.trim();
      svgDoc.documentElement.style.borderImageOutset = 'unset   '.trim();
      svgDoc.documentElement.style.borderImageRepeat = 'unset   '.trim();
      svgDoc.documentElement.style.paddingTop        = 'unset   '.trim();
      svgDoc.documentElement.style.paddingRight      = 'unset   '.trim();
      svgDoc.documentElement.style.paddingBottom     = 'unset   '.trim();
      svgDoc.documentElement.style.paddingLeft       = 'unset   '.trim();
      svgDoc.documentElement.style.width             = '100vw   '.trim(),
      svgDoc.documentElement.style.height            = '100vh   '.trim();
      //////////////////////////////////////////////////
      pixel.setAttribute('x     '.trim(), '0px '.trim());
      pixel.setAttribute('y     '.trim(), '0px '.trim());
      pixel.setAttribute('width '.trim(), '100%'.trim());
      pixel.setAttribute('height'.trim(), '100%'.trim());
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

    render()
    {
      return `
      <svg xmlns="http://www.w3.org/2000/svg">
      <rect id="pixel"/>
      Sorry, your browser does not support inline SVG.
      </svg>
      `;
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