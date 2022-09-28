import html from './template.html';
import css from './css/index.css';

/**
 * Web component that retrieves and displays a list of benefits available to Californians that are recommended for the current visitor on the host site
 *
 * @element cagov-benefits-recs
 *
 *
 * @fires click - Default events which may be listened to in order to discover most popular accordions
 *
 * @attr {string} language - optional language preference using language code like 'en-US' browser will be queried for this preference if attribute is not present
 *
 * @cssprop --primary-700 - Default value of #165ac2, used for all colors of borders and fills
 *
 */
export class CaGovBenefitsRecs extends window.HTMLElement {
  constructor() {
    super(html, css);

    this.html = html;
    this.css = css;
    this.benefitsAPI = 'https://7ksmy2xna5.execute-api.us-west-1.amazonaws.com/'
  }

  // respond to changed attributes
  
  connectedCallback() {
    this.language = navigator.language;
    this.income = "";

    if(this.hasAttribute('language')) {
      this.language = this.getAttribute('language');
    }
    if(this.hasAttribute('income')) {
      this.income = this.getAttribute('income');
    }

    // create widget environment data object to pass to API
    this.widgetEnvData = {};
    this.widgetEnvData.event = 'render';
    this.widgetEnvData.displayURL = window.location.toString();
    this.widgetEnvData.userAgent = navigator.userAgent;
    this.widgetEnvData.language = this.language;
    this.widgetEnvData.income = this.income;

    // retrieve set of benefits links from API
    fetch(`${this.benefitsAPI}benefits`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => {
      let json = JSON.parse(data);

      // create template from imported html
      let template = document.createElement('template');
      template.innerHTML = this.html;
      // with style tag
      let style = document.createElement('style');
      template.content.prepend(style);
      // create shadow root
      this.attachShadow({mode: "open"});
      this.shadowRoot.append(template.content.cloneNode(true));
      // insert css into style element in template in shadow root
      this.shadowRoot.querySelector('style').append(this.css); 

      this.shadowRoot.querySelector('h2').innerHTML = json.header;
      this.shadowRoot.querySelector('p.tagline').innerHTML = json.tagline;
      let listContainer = this.shadowRoot.querySelector('ul.benefits');
      json.links.forEach(link => {
        // the classnames used here are inside a shadow root so can be generic as they won't inherit rules applied to the same name outside this component's shadow DOM
        listContainer.innerHTML += `
          <li>
            <a href="${link.url}">
              <span class="details">
                <span class="svg">${link.graphic}</span>
                <span class="offer">
                  <span class="linktext">${link.linktext}</span>
                  <span class="description">${link.description}</span>
                </span>
              </span>
              <span class="program">
                ${link.program} &nbsp; 
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.34999 11.147C0.64299 11.44 1.11799 11.44 1.40999 11.147L6.27399 6.28198C6.42099 6.13498 6.49499 5.94098 6.49299 5.74898C6.49299 5.55498 6.42099 5.36298 6.27399 5.21598L1.40999 0.350976C1.11699 0.0579756 0.64199 0.0579756 0.34999 0.350976C0.0579904 0.643976 0.0569904 1.11898 0.34999 1.41198L4.68699 5.74898L0.35099 10.086C0.0579898 10.379 0.0579898 10.854 0.35099 11.147H0.34999Z" fill="black"/>
                </svg>
              </span>
            </a>
          </li>
        `;
      })

      // post event render
      this.recordEvent('render');
      // apply other listeners
      this.applyListeners();

    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  recordEvent(event, linkClicked, linkClickedText) {
    this.widgetEnvData.event = event;

    if(event === 'click') {
      this.widgetEnvData.link = linkClicked;
      this.widgetEnvData.linkText = linkClickedText;
    } else {
      delete this.widgetEnvData.link;
      delete this.widgetEnvData.linktext;
    }
    
    fetch(`${this.benefitsAPI}event`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.widgetEnvData)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    });
  }

  applyListeners() {
    let benefitsLinks = this.shadowRoot.querySelectorAll('ul.benefits a');
    benefitsLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        this.recordEvent('click', event.target.closest('a').href,  event.target.innerText.trim());
      })
    })

    // report back when it reached viewable part of screen
  }

}
window.customElements.define('cagov-benefits-recs', CaGovBenefitsRecs);
