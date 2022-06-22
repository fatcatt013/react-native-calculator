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

    const input = [
      '1',
      'plus',
      '4',
      'minus',
      '2',
      'divide',
      '4',
      'times',
      '8',
      'equals',
    ];

    for (let i = 0; i < input.length; i++) {
      cy.get(`[data-testid=${input[i]}]`).click();
    }

    cy.get('[data-testid="header"]').should('have.text', '1+4-2/4x8');
  });

  it('Testing the negative button', () => {
    cy.visit('http://localhost:19006/');

    cy.get('[data-testid="negative"]').click();

    cy.get('[data-testid="currNum"]').should('have.text', '-');

    cy.get('[data-testid="negative"]').click();

    cy.get('[data-testid="currNum"]').should('have.text', '');
  });
});

describe('Testing the calculation', () => {
  it('Testing the calculation', () => {
    cy.visit('http://localhost:19006/');

    cy.get('[data-testid="5"]').click();

    cy.get('[data-testid="plus"]').click();

    cy.get('[data-testid="9"]').click();

    cy.get('[data-testid="equals"]').click();

    cy.get('[data-testid="currNum"]').should('have.text', '14');
  });
});
