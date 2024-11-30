class LoginPage {
  visit() {
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
  
  LoginInvalid() {
    cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text', 'Invalid credentials');
  }

  LoginRequired(){
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  
  }
}
  
export default LoginPage;
