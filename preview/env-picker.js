const browserHost = window.location.hostname;
const isLocal = browserHost === "localhost" || browserHost === "127.0.0.1";

const defaultMenus = {
  endpoint: {
    label: "API environment:",
    attribute: "endpoint",
    defaultValue: "none",
    options: [
      {
        id: "default",
        value: "none",
        text: "default",
      },
      {
        id: "prod",
        value: "https://br.api.innovation.ca.gov",
        text: "production",
      },
      {
        id: "staging",
        value: "https://staging.br.api.innovation.ca.gov",
        text: "staging",
      },
      ...(isLocal
        ? [
            {
              id: "local",
              value: "http://localhost:3333",
              text: "local",
            },
          ]
        : []),
    ],
  },
  host: {
    label: "Placement host:",
    attribute: "host",
    defaultValue: "none",
    options: [
      {
        id: "default",
        value: "none",
        text: "none",
      },
      // Rest of options loaded from API.
    ],
  },
  language: {
    label: "Language:",
    attribute: "language",
    defaultValue: "none",
    options: [
      {
        id: "default",
        value: "none",
        text: "Web browser default",
      },
      {
        id: "en",
        value: "en",
        text: "English",
      },
    ],
  },
};

const optionHtml = (optObj) => /* html */ `
  <option
    id="${optObj.id}" 
    value="${optObj.value}" 
    ${optObj?.selected ? "selected" : ""}
  >
    ${optObj.text}
  </option>
`;

const selectHtml = (selKey, selObj) => {
  if (selObj.options.length > 0) {
    const optionsHtml = selObj.options
      .map((optObj) => optionHtml(optObj))
      .join("\n");

    return /* html */ `
      <fieldset>
        <label for="${selKey}">${selObj.label}</label>
        <select name="${selKey}" id="${selKey}">
          ${optionsHtml}
        </select>
      </fieldset>
    `;
  } else {
    return "";
  }
};

const generateHtml = (menus) => {
  const selectsHtml = Object.keys(menus)
    .map((selKey) => selectHtml(selKey, menus[selKey]))
    .join("\n");

  const button = /* html */ `
    <fieldset>
      <label for="reload">Reload:</label>
      <button name="reload" id="reload">Refresh links</button>
    </fieldset>
  `;

  return `${selectsHtml}\n${button}`;
};

const shadowCss = /* css */ `
  fieldset {
    border: none;
    padding: 0;
    margin: 1rem 0;
  }
`;

const getHostOptions = async () => {
  const url = "https://cdn.innovation.ca.gov/br/benefits-recs-defs.json";

  return await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) =>
      data.hosts.map((hostDef) => ({
        id: hostDef.id,
        value: hostDef.urls[0],
        text: hostDef.id,
      }))
    )
    .catch(() => {
      alert(`Definitions unavailable: ${url}`);
      return [];
    });
};

const hydrateMenus = async () => {
  const menus = { ...defaultMenus };
  const widget = document.querySelector("cagov-benefits-recs");

  const hosts = (await getHostOptions()) || [];
  menus.host.options = [...menus.host.options, ...hosts];

  Object.keys(menus).forEach((key) => {
    const selObj = menus[key];
    const currentValue = widget.hasAttribute(selObj.attribute)
      ? widget.getAttribute(selObj.attribute)
      : selObj.defaultValue;

    selObj.options.forEach((optObj) => {
      if (optObj.value === currentValue) {
        optObj.selected = true;
      }
    });
  });

  return menus;
};

class EnvPicker extends window.HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.menus = {};
  }

  async connectedCallback() {
    const menus = await hydrateMenus();
    this.menus = menus;
    const initialHtml = generateHtml(this.menus);

    const template = document.createElement("template");
    template.innerHTML = initialHtml;
    const style = document.createElement("style");
    style.append(shadowCss);
    template.content.prepend(style);
    this.shadowRoot.append(template.content.cloneNode(true));

    Object.keys(this.menus).forEach((key) => {
      this.applySelectListener(key);
    });

    this.shadowRoot.querySelector("#reload").addEventListener("click", () => {
      this.replaceWidget();
    });
  }

  // Replace the <cagov-benefits-recs> widget with a new one.
  // This lets us refresh the widget without putting a bunch of refresh code in the widget itself.
  replaceWidget() {
    const widgetBox = document.querySelector("#widget-box");
    const widget = widgetBox.querySelector("cagov-benefits-recs");

    widget.remove();

    const newWidget = document.createElement("cagov-benefits-recs");

    Object.keys(this.menus).forEach((key) => {
      const selObj = this.menus[key];
      const selectEl = this.shadowRoot.querySelector(`#${selObj.attribute}`);
      const selectIndex = selectEl.selectedIndex;
      const selectValue = selectEl.options[selectIndex].value;

      if (selectValue !== "none") {
        newWidget.setAttribute(selObj.attribute, selectValue);
      }
    });

    widgetBox.append(newWidget);
  }

  getSelectEl(menuKey) {
    const attribute = this.menus[menuKey].attribute;
    return this.shadowRoot.querySelector(`#${attribute}`);
  }

  selectListener() {
    this.replaceWidget();
  }

  // Listen for changes to the <select> element in the ShadowRoot.
  applySelectListener(menuKey) {
    const selectEl = this.getSelectEl(menuKey);
    selectEl.addEventListener("change", this.selectListener.bind(this));
  }

  removeSelectListener(menuKey) {
    const selectEl = this.getSelectEl(menuKey);
    selectEl.removeEventListener("change", this.selectListener.bind(this));
  }
}

window.customElements.define("env-picker", EnvPicker);
