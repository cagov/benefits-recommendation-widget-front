import { css, rootHtml, linkHtml } from "./templates.js";

export class CaGovBenefitsRecs extends window.HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.endpoint = (
      this.hasAttribute("endpoint")
        ? this.getAttribute("endpoint")
        : "https://br.api.innovation.ca.gov"
    ).replace(/\/$/, "");

    this.language = this.hasAttribute("language")
      ? this.getAttribute("language")
      : document.querySelector("html").getAttribute("lang");

    this.income = this.hasAttribute("income")
      ? this.getAttribute("income")
      : "";

    this.host = this.hasAttribute("host")
      ? this.getAttribute("host")
      : window.location.href;

    const benefitsUrl = new URL(`${this.endpoint}/benefits`);

    // We'll append the query parameters to the URL of our API call.
    const queryKeys = ["host", "language"];
    queryKeys.forEach((key) => {
      if (this[key]) benefitsUrl.searchParams.append(key, this[key]);
    });

    // Retrieve set of benefits links from API.
    fetch(benefitsUrl.href, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .catch((error) => {
        throw new Error(
          `Benefits Recommendation API unavailable. Hiding widget.`,
          { cause: error }
        );
      })
      .then((response) => response.json())
      .then((json) => JSON.parse(json))
      .then((data) => {
        // Only render the widget if we actually get valid links.
        if (data.links && data.links.length > 1) {
          const template = document.createElement("template");
          template.innerHTML = rootHtml;

          const style = document.createElement("style");
          style.textContent = css;

          template.content.prepend(style);

          this.attachShadow({ mode: "open" });
          this.shadowRoot.append(template.content.cloneNode(true));

          this.shadowRoot.querySelector("h2").innerHTML = data.header;
          this.shadowRoot.querySelector("p.tagline").innerHTML = data.tagline;
          let listContainer = this.shadowRoot.querySelector("ul.link-list");
          data.links.forEach((link) => {
            listContainer.innerHTML += linkHtml(link);
          });

          this.experimentName = data.experimentName;
          this.experimentVariation = data.experimentVariation;

          this.recordEvent("render");
          this.applyListeners();
        } else {
          console.log(
            "No links received by Benefits Recommendation API. Hiding widget."
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  recordEvent(event, details = {}) {
    const defaults = {
      displayURL: window.location.toString(),
      userAgent: navigator.userAgent,
      language: this.language,
      income: this.income,
      experimentName: this.experimentName,
      experimentVariation: this.experimentVariation,
    };

    const data = Object.assign({ event }, defaults, details);

    navigator.sendBeacon(`${this.endpoint}/event`, JSON.stringify(data));
  }

  applyListeners() {
    const benefitsLinks = this.shadowRoot.querySelectorAll("ul.benefits a");
    benefitsLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        this.recordEvent("click", {
          link: event.target.closest("a").href,
          linkText: event.target.innerText.trim(),
        });
      });
    });
  }
}

window.customElements.define("cagov-benefits-recs", CaGovBenefitsRecs);
