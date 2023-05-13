it('titles are correct', () => {
  const page = cy.visit('http://localhost:3000');

  // page.get('title').should('have.text', 'Astro is awesome!')
  page.get('.text-gradient').should('have.text', 'Breaking down the  barriers of corporate America');
});