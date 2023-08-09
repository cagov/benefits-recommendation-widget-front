// the classnames used here are inside a shadow root so can be generic as they won't inherit rules applied to the same name outside this component's shadow DOM

export default (link) => /* html */ `
<li>
  <a href="${link.url}" target="_blank" rel="noopener noreferrer">
    <span class="details">
      <span class="svg">${link.graphic}</span>
      <span class="offer">
        <span class="linktext">${link.linktext}</span>
        <span class="description">${link.description}</span>
      </span>
    </span>
    <span class="program-caret">
      <span class="program">
        ${link.program}
      </span>
      <span class="caret">
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.34999 11.147C0.64299 11.44 1.11799 11.44 1.40999 11.147L6.27399 6.28198C6.42099 6.13498 6.49499 5.94098 6.49299 5.74898C6.49299 5.55498 6.42099 5.36298 6.27399 5.21598L1.40999 0.350976C1.11699 0.0579756 0.64199 0.0579756 0.34999 0.350976C0.0579904 0.643976 0.0569904 1.11898 0.34999 1.41198L4.68699 5.74898L0.35099 10.086C0.0579898 10.379 0.0579898 10.854 0.35099 11.147H0.34999Z" fill="black"/>
        </svg>
      </span>
    </span>
  </a>
</li>
`