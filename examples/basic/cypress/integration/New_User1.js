describe('Test module users', () => {

    it('Login', () => {
        cy.visit('http://52.152.167.84:8010')
        cy.get('#username-input').type('admin')
        cy.get('#password-input').type('Qc265?~z&>tlsc^m')
        cy.get('.btn').should('have.class', 'btn btn-login btn-block').click()
    })
  
    it('Ir a Modulo de usuarios', () => {
        cy.get('.waves-effect > .fas').should('have.class', 'fas fa-users-cog nav-icon').click()
    })
  
    it('Create User 1', () => {
        cy.get('.views > :nth-child(2)').contains('Create User').click()
        cy.get('#username-input').type('PaolaB')
        cy.get('#name-input').type('Gina Paola')
        cy.get('#latname-input').type('Ballesteros')
        cy.get('#title-input').clear()
        cy.get('#title-input').type('Sra.')
        cy.get('#password-input').type('1234567890')
        cy.get('#password-input2').type('1234567890')
        cy.get(':nth-child(2) > label').click()
        cy.get(':nth-child(3) > label').click()
        cy.get(':nth-child(4) > label').click()
        cy.get('.btn').should('have.class', 'btn btn-pacs').click()
    })

    it('Delete User', () => {
        cy.contains('PaolaB').click()
        cy.get(':nth-child(4) > .right').should('have.class', 'btn btn-pacs right').click()
        cy.get('div.center-align > :nth-child(1)').should('have.class', 'btn-flat').click()
    })
})