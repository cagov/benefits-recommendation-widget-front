export default /* css */ `
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