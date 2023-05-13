it('titles are correct', () => {
  const page = cy.visit('http://localhost:3000');

  page.get('.accent').should('have.text', 'We are a team of passionate individuals who are breaking down the barriers of corporate America');
  // page.get('h1').should('have.text', 'Hello world from Astro');
});

// import Button from '../../src/components/Hero'

// it('uses custom text for the button label', () => {
//   cy.mount(<Button>Click me!</Button>)
//   cy.get('button').should('contains.text', 'Click me!')
// })