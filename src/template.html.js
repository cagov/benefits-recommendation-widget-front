const html = /* html */ `

<section aria-label="benefits recommendations">
  <h2 part="header2">Claim more benefits</h2>
  <p class="tagline">You could qualify to get:</p>
  <ul class="benefits link-list">
    <li class="link-item">
      <a class="anchor" href="" target="_blank" rel="noopener noreferrer">
        <span class="details">
          <span class="graphic"></span>
          <span class="offer">
            <span class="linktext"></span>
            <span class="description"></span>
          </span>
        </span>
        <span class="program-caret">
          <span class="program"></span>
          <span class="caret">
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.34999 11.147C0.64299 11.44 1.11799 11.44 1.40999 11.147L6.27399 6.28198C6.42099 6.13498 6.49499 5.94098 6.49299 5.74898C6.49299 5.55498 6.42099 5.36298 6.27399 5.21598L1.40999 0.350976C1.11699 0.0579756 0.64199 0.0579756 0.34999 0.350976C0.0579904 0.643976 0.0569904 1.11898 0.34999 1.41198L4.68699 5.74898L0.35099 10.086C0.0579898 10.379 0.0579898 10.854 0.35099 11.147H0.34999Z" fill="black"/>
            </svg>
          </span>
        </span>
      </a>
    </li>
  </ul>
</section>

`;

const css = /* css */ `

/* these style rules are used inside the component shadow root so can reference generic elements without influencing the containing page */
section {
  background: #e1f1ee;
  border-left: 3px solid #006c58;
  margin: 1rem 0 0 0;
  padding: 0 2rem 2rem 2rem;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
}

h2 {
  color: #077e62;
}

ul.benefits {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}

ul.benefits li {
  list-style: none;
  background: #fff;
  flex-grow: 1;
  max-width: 100%;
}

ul.benefits li a {
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  text-decoration: none;
  color: #000;
}

ul.benefits li a:hover {
  box-shadow: 0 0 23.3143px rgba(0, 0, 0, 0.25);
}

ul.benefits li .details {
  display: flex;
  min-width: 69%;
  align-items: center;
}

ul.benefits li .details .svg {
  margin-top: 0.3rem;
}

ul.benefits li .details .offer {
  display: flex;
  flex-flow: column;
  margin-left: 1rem;
}

ul.benefits li .details .linktext {
  font-weight: bold;
}

ul.benefits li .program-caret {
  display: flex;
  align-items: center;
}

ul.benefits li .program-caret .program {
  font-weight: bold;
  text-align: right;
  margin-right: 0.3rem;
  flex-grow: 2;
}

@media (max-width: 500px) {
  ul.benefits li a {
    flex-flow: column;
  }
}

`;

export const defaultHtml = `
<style>
${css}
</style>
${html}
`.trim();
