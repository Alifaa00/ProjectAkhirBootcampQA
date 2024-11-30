import ForgotPasswordPage from '../POM/ForgotPassword.cy';

describe('Forgot Password', () => {
  const forgotPasswordPage = new ForgotPasswordPage();

  it('Berhasil mengirimkan request reset password', () => {
    forgotPasswordPage.visit();
    forgotPasswordPage.clickForgotPassword();
    forgotPasswordPage.enterUsername('Admin');

    cy.intercept('GET', '**/sendPasswordReset').as('btnReset');
    forgotPasswordPage.clickResetPassword();
    cy.wait('@btnReset');

    forgotPasswordPage.verifyResetMessage();
  });

  it('Forgot dengan username kosong', () => {
    forgotPasswordPage.visit();
    forgotPasswordPage.clickForgotPassword();
    forgotPasswordPage.clickResetPassword();
    forgotPasswordPage.ErrorMessageRequired();
  });
});
