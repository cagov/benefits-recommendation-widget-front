import { defaultHtml } from "./template.html.js";

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
    super();

    this.benefitsAPI =
      "https://k61aw4mwkc.execute-api.us-west-1.amazonaws.com/";
  }

  connectedCallback() {
    this.language = document.querySelector("html").getAttribute("lang");
    this.income = "";

    if (this.hasAttribute("language")) {
      this.language = this.getAttribute("language");
    }
    if (this.hasAttribute("endpoint")) {
      this.benefitsAPI = this.getAttribute("endpoint");
    }
    if (this.hasAttribute("income")) {
      this.income = this.getAttribute("income");
    }
    if (this.hasAttribute("host")) {
      this.host = this.getAttribute("host");
    }

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
        if (this[key]) bucket.push(`${key}=${this[key]}`);
        return bucket;
      }, [])
      .join("&");

    // retrieve set of benefits links from API
    fetch(`${this.benefitsAPI}benefits?${queryString}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let data = JSON.parse(json);

        // if i receive no info from the api do nothing
        if (data.links && data.links.length > 1) {
          let template;

          // If host supplies their own template, let's use it.
          const customTemplateId = "cagov-benefits-recs-template";
          const customTemplate = document.getElementById(customTemplateId);
          if (customTemplate) template = customTemplate;

          // Otherwise, use default template.
          if (!template) {
            template = document.createElement("template");
            template.innerHTML = defaultHtml;
          }

          const h2 = template.content.querySelector("h2");
          h2.innerHTML = data.header;

          const tagline = template.content.querySelector("p.tagline");
          tagline.innerHTML = data.tagline;

          const linkList = template.content.querySelector(".link-list");
          const linkItem = linkList.querySelector(".link-item");
          linkItem.remove();

          const props = ["graphic", "description", "linktext", "program"];

          // Clone and populate the HTML for each link.
          data.links.forEach((link) => {
            const newLinkItem = linkItem.cloneNode(true);

            props.forEach((prop) => {
              const el = newLinkItem.querySelector(`.${prop}`);
              if (el) el.innerHTML = link[prop];
            });

            const anchor = newLinkItem.querySelector(".anchor");
            if (anchor) anchor.href = link.url;

            linkList.append(newLinkItem);
          });

          // create shadow root
          this.attachShadow({ mode: "open" });
          this.shadowRoot.append(template.content.cloneNode(true));

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
