import ForgotPasswordPage from '../POM/ForgotPassword.cy';

describe('Forgot Password Tests', () => {
  const forgotPasswordPage = new ForgotPasswordPage();

  it('should send reset password request', () => {
    forgotPasswordPage.visit();
    forgotPasswordPage.clickForgotPassword();
    forgotPasswordPage.enterUsername('Admin');
    forgotPasswordPage.clickResetPassword();
    forgotPasswordPage.verifyResetMessage();
  });
});
