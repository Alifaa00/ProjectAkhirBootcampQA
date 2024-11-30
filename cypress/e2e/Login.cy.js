import LoginPage from '../POM/Login.cy';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  it('should login successfully with valid credentials', () => {
    loginPage.visit();
    loginPage.fillUsername('Admin');
    loginPage.fillPassword('admin123');
    loginPage.clickLoginButton();
    loginPage.LoginSuccess();
  });

  it('should display error with invalid credentials', () => {
    loginPage.visit();
    loginPage.fillUsername('User');
    loginPage.fillPassword('usertest');
    loginPage.clickLoginButton();
    loginPage.getErrorMessage();
  });
});
