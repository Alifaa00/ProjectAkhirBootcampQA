class ForgotPasswordPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }
  
  clickForgotPassword() {
    cy.get('[class="orangehrm-login-forgot"]').click();
  }
  
  enterUsername(username) {
    cy.get('[name="username"]').type(username);
  }
  
  clickResetPassword() {
    cy.get('[type="submit"]').click();
  }
  
  verifyResetMessage() {
    cy.get('[class="orangehrm-card-container"]').should('be.visible');
  }

  ErrorMessageRequired(){
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text', 'Required');
  }
  

}

export default ForgotPasswordPage;  
