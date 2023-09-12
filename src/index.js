import html from "./template.html.js";
import css from "./index.css.js";
import linkHtml from "./link.html.js";

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
  }

  connectedCallback() {
    this.benefitsAPI = this.hasAttribute("endpoint")
      ? this.getAttribute("endpoint")
      : "https://k61aw4mwkc.execute-api.us-west-1.amazonaws.com/";

    const lang = document.querySelector("html").getAttribute("lang");

    this.language = this.hasAttribute("language")
      ? this.getAttribute("language")
      : lang;

    this.income = this.hasAttribute("income")
      ? this.getAttribute("income")
      : "";

    this.host = this.hasAttribute("host")
      ? this.getAttribute("host")
      : window.location.href;

    // create widget environment data object to pass to API
    this.widgetEnvData = {};
    this.widgetEnvData.event = "render";
    this.widgetEnvData.displayURL = window.location.toString();
    this.widgetEnvData.userAgent = navigator.userAgent;
    this.widgetEnvData.language = this.language;
    this.widgetEnvData.income = this.income;
    // experiment name and variation are defined after json is received

    // We'll append the queryString to the URL of our API call.
    const queryKeys = ["host", "language"];
    const queryString = queryKeys
      .reduce((bucket, key) => {
        if (this[key]) bucket.push(`${key}=${encodeURIComponent(this[key])}`);
        return bucket;
      }, [])
      .join("&");

    const benefitsURL = `${this.benefitsAPI}benefits?${queryString}`;

    // retrieve set of benefits links from API
    fetch(benefitsURL, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let data = JSON.parse(json);

        // if i receive no info from the api do nothing
        if (data.links && data.links.length > 1) {
          // create template from imported html
          let template = document.createElement("template");
          template.innerHTML = this.html;
          // with style tag
          let style = document.createElement("style");
          template.content.prepend(style);
          // create shadow root
          this.attachShadow({ mode: "open" });
          this.shadowRoot.append(template.content.cloneNode(true));
          // insert css into style element in template in shadow root
          this.shadowRoot.querySelector("style").append(this.css);

          this.shadowRoot.querySelector("h2").innerHTML = data.header;
          this.shadowRoot.querySelector("p.tagline").innerHTML = data.tagline;
          let listContainer = this.shadowRoot.querySelector("ul.benefits");
          data.links.forEach((link) => {
            listContainer.innerHTML += linkHtml(link);
          });

          this.widgetEnvData.experimentName = data.experimentName;
          this.widgetEnvData.experimentVariation = data.experimentVariation;

          // post event render
          this.recordEvent("render");
          // apply other listeners
          this.applyListeners();
        } else {
          // no links received from api, do not render anything inside custom element, it will stay hidden and take up no space
        }
      })
      .catch((error) => {
        // console.log('Error:', error);
      });
  }

  recordEvent(event, linkClicked, linkClickedText) {
    this.widgetEnvData.event = event;
    // console.log(this.widgetEnvData)

    if (event === "click") {
      this.widgetEnvData.link = linkClicked;
      this.widgetEnvData.linkText = linkClickedText;
    } else {
      delete this.widgetEnvData.link;
      delete this.widgetEnvData.linktext;
    }

    fetch(`${this.benefitsAPI}event`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.widgetEnvData),
    });
  }

  applyListeners() {
    let benefitsLinks = this.shadowRoot.querySelectorAll("ul.benefits a");
    benefitsLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        this.recordEvent(
          "click",
          event.target.closest("a").href,
          event.target.innerText.trim()
        );
      });
    });
  }
}
window.customElements.define("cagov-benefits-recs", CaGovBenefitsRecs);
