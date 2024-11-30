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
}

export default ForgotPasswordPage;  