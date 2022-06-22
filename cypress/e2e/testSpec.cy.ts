import cypressConfig from '../../cypress.config';

describe('Buttons working', () => {
  it('Testing number buttons', () => {
    cy.visit('http://localhost:19006/');
    for (let i = 0; i < 10; i++) {
      cy.get(`[data-testid=${i}]`).click();
    }
    cy.get('[data-testid="currNum"]').should('have.text', '0123456789');
  });

  it('Testing special number functions', () => {
    cy.visit('http://localhost:19006/');

    for (let i = 0; i < 5; i++) {
      cy.get(`[data-testid=${i}]`).click();
    }

    cy.get('[data-testid=DEL]').click();

    cy.get('[data-testid="currNum"]').should('have.text', '0123');

    cy.get('[data-testid=CE]').click();

    cy.get('[data-testid="currNum"]').should('have.text', '');
  });

  it('Testing the operation buttons', () => {
    cy.visit('http://localhost:19006/');

    const input = ['1', '+', '4', '-', '2', '/', '4', 'x', '8'];

    for (let i = 0; i < input.length; i++) {
      cy.get(`[data-testid=${input[i]}]`).click();
    }
  });
});
