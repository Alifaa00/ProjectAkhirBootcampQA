/// <reference types= "cypress" />

import LoginPage from '../POM/Login.cy';

describe('Login Test', () => {
  const loginPage = new LoginPage();

  it('Berhasil login menggunakan data valid', () => {
    loginPage.visit();
    loginPage.fillUsername('Admin');
    loginPage.fillPassword('admin123');

    cy.intercept('GET', '**/action-summary').as('login');
    loginPage.clickLoginButton();
    cy.wait('@login');

    loginPage.LoginSuccess();
  });

  it('Gagal login menggunakan data tidak valid', () => {
    loginPage.visit();
    loginPage.fillUsername('User');
    loginPage.fillPassword('usertest');
    
    cy.intercept('GET', '**/login').as('btnlogin');
    loginPage.clickLoginButton();
    cy.wait('@btnlogin');

    loginPage.LoginInvalid();
  });

  it('Gagal login dengan password kosong', () => {
    loginPage.visit();
    loginPage.fillUsername('Admin');
    loginPage.clickLoginButton();

    loginPage.LoginRequired();
  })
});
