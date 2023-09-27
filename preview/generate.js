import { promises as fs } from "fs";

const generate = (props) => {
  const pr = props.prNumber
    ? `(<a href="https://github.com/cagov/benefits-recommendation-widget-front/pull/${props.prNumber}">Pull Request #${props.prNumber}</a>)`
    : "";

  return /* html */ `
    <!doctype html>
    <html lang="en-US">
      <head>
        <title>Benefits Recommender Preview</title>
        <link rel="icon" href="data:;base64,iVBORw0KGgo=">
        <script type="module" src="env-picker.js"></script>
        <link rel="stylesheet" href="preview.css" />
      </head>
      <body>
        <main>
          <hgroup>
            <h1>Benefits Recommender Preview</h1>
            <p>Widget branch: ${props.widgetEnv} ${pr}</p>
            <env-picker></env-picker>
          </hgroup>

          <p>Here's some test content.</p>
          <p>The widget follows.</p>

          <div id="widget-box">
            <cagov-benefits-recs
              endpoint="https://staging.br.api.innovation.ca.gov">
            </cagov-benefits-recs>
          </div>

          <p>Site content runs below the widget too.</p>

          <script type="module" async defer src="../cagov-benefits-recs.js"></script>
        </main>
      </body>
    </html>
  `;
};

(async () => {
  // CLI:
  // node generate.js WIDGET-BRANCH PR-NUMBER
  // node generate.js my-upcoming-change-branch 12
  const args = process.argv;

  const widgetEnv = args[2] || "main";
  const prNumber = args[3] || undefined;

  const html = generate({
    widgetEnv,
    prNumber,
  });

  await fs.mkdir("dist/preview", { recursive: true });

  await Promise.all([
    fs.writeFile("dist/preview/index.html", html),
    fs.copyFile("preview/env-picker.js", "dist/preview/env-picker.js"),
    fs.copyFile("preview/preview.css", "dist/preview/preview.css"),
  ]);
})().catch((error) => console.log(error));
