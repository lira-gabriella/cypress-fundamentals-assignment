describe('Part C, E, F, K & L: Basic Elements Suite', () => {

  it('Tests text inputs, clear actions, keyboard modifications, checkboxes, and dropdowns', () => {
    // ACTUAL VALUE 1: The precise sandbox URL location hosting the text form controls
    cy.visit('https://expandtesting.com');

    // ACTUAL VALUE 2: The exact HTML element target ID rule on the live page
    // ACTUAL VALUE 3: The automated mock data string parameter
    cy.get('#input-number')
      .should('be.visible')
      .type('12345')
      .should('have.value', '12345');

    // ACTUAL VALUE 4: Explicit wipe string rule verification
    cy.get('#input-number').clear().should('have.value', '');
    
    // ACTUAL VALUE 5: Specific structural keyboard sequence triggers
    cy.get('#input-number').type('99').type('{arrowleft}').type('{backspace}');

    // ACTUAL VALUE 6: The exact URL location hosting the check box controls
    cy.visit('https://expandtesting.com');
    
    // ACTUAL VALUE 7: The exact element ID selector matching the target checklist box
    cy.get('#checkbox1').scrollIntoView().should('be.visible');
    cy.get('#checkbox1').check().should('be.checked');
    cy.get('#checkbox1').uncheck().should('not.be.checked');

    // ACTUAL VALUE 8: The precise URL location hosting the selection list dropdown controls
    cy.visit('https://expandtesting.com');
    
    // ACTUAL VALUE 9: The dropdown element ID and option choice index mapping parameters
    cy.get('#dropdown').select('Option 1').should('have.value', '1');
  });

});
