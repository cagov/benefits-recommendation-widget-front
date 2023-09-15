# Benefits recommendation widget

The benefits recommender is a small, embeddable HTML widget. It helps constituents find and apply for California State benefits.

This repository holds the front-end code.

## How it works

Participating California State government departments can embed the benefits recommender widget on their web pages. The widget then displays links to apply for benefits across the state.

The widget accepts information about the current visitor to make more informed decisions about which benefit application links to display. Then the widget communicates with our back-end server to determine the best links to display.

The back-end server's code is hosted in another repository, [@cagov/benefits-recommendation-widget-back](https://github.com/cagov/benefits-recommendation-widget-back).

## How to use

Place the following HTML snippet wherever you want the widget to appear on your page.

```
<cagov-benefits-recs></cagov-benefits-recs>
<script type="module" async defer src="https://cdn.innovation.ca.gov/br/cagov-benefits-recs.js"></script>
```

That's it!

While the above snippet will work alone, we strongly recommend talking to us before use. We can tune our servers to ensure visitors to your site receive the most relevant benefit application links.

## Development

To start a local development server from this repo, run the following command. (NodeJS is required.)

```
npm run local
```

Then view the <a href="http://127.0.0.1:8080/preview/local.html">local test page URL</a>.

The widget accepts a few parameters for development purposes.

### Host

The optional `host` parameter tells the widget to pretend it's hosted on another page.

`host` should be supplied as a full URL.

When omitted, `host` will default to the current page.

But why would you want to use this? From our back-end API, we serve different links to the widget based upon where it's hosted. In development/staging environments, your page URLs may differ from the production URLs our back-end API expects. Therefore, the `host` parameter lets you "spoof" the widget's parent page. In non-production contexts, this can be helpful to correctly preview which links will be displayed by the widget.

```
<cagov-benefits-recs
  host="https://my-site.ca.gov/my-other-page-in-production.html"
></cagov-benefits-recs>

<script type="module" async defer src="https://cdn.innovation.ca.gov/br/cagov-benefits-recs.js"></script>
```

### Language

The optional `language` parameter tells the widget which language is preferred.

`language` should be submitted as an [ISO 639-1 code](https://www.w3schools.com/tags/ref_language_codes.asp).

When omitted, `language` will default to the `lang` attribute of the `<html>` element. (For example, `<html lang="es">`.)

```
<cagov-benefits-recs
  language="es"
></cagov-benefits-recs>

<script type="module" async defer src="https://cdn.innovation.ca.gov/br/cagov-benefits-recs.js"></script>
```

> Note: the widget's content is not yet translated to other languages. Until then, this parameter will have no effect. Stay tuned! Translations are coming soon.

### Endpoint

The optional `endpoint` parameter tells the widget which API to contact for links.

When omitted, `endpoint` will default to the production API.

This is probably only useful for the widget developers.

```
<cagov-benefits-recs
  endpoint="http://localhost:3333"
></cagov-benefits-recs>

<script type="module" async defer src="https://cdn.innovation.ca.gov/br/cagov-benefits-recs.js"></script>
```

Here are the API endpoints for each environment.

| Environment              | Endpoint URL                             |
| ------------------------ | ---------------------------------------- |
| Local API                | http://localhost:3333                    |
| Staging API              | https://staging.br.api.innovation.ca.gov |
| Production API (default) | https://br.api.innovation.ca.gov         |
