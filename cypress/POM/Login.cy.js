class LoginPage {
    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    }

    fillUsername(username) {
        cy.get('[name="username"]').type(username);
    }
    
    fillPassword(password) {
        cy.get('[name="password"]').type(password);
    }
    
    clickLoginButton() {
        cy.get('[type="submit"]').click();
    }
    
    LoginSuccess() {
        cy.url().should('include', '/dashboard');
    }
    
    getErrorMessage() {
        return cy.get('[class="oxd-alert-content oxd-alert-content--error"]');
    }
    
    getErrorMessageEmpty(){
        return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]');
    }
    
    getErrorMessage() {
        return cy.get('.oxd-alert-content-text');
      }

}


export default LoginPage;  