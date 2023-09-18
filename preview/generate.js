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
      </head>
      <body>
        <main>
          <hgroup>
            <h1>Benefits Recommender Preview</h1>
            <p>Widget branch: ${props.widgetEnv} ${pr}</p>
            <p>API environment: ${props.apiEnv}</p>
          </hgroup>

          <p>Here's some test content.</p>
          <p>The widget follows.</p>

          <cagov-benefits-recs endpoint="${props.apiEndpoint}"></cagov-benefits-recs>

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

  const prodHtml = generate({
    apiEnv: "production",
    apiEndpoint: "https://br.api.innovation.ca.gov",
    widgetEnv,
    prNumber,
  });

  const stagingHtml = generate({
    apiEnv: "staging",
    apiEndpoint: "https://staging.br.api.innovation.ca.gov",
    widgetEnv,
    prNumber,
  });

  await fs.mkdir("dist/preview", { recursive: true });
  await fs.writeFile("dist/preview/prod.html", prodHtml);
  await fs.writeFile("dist/preview/staging.html", stagingHtml);
})().catch((error) => console.log(error));
