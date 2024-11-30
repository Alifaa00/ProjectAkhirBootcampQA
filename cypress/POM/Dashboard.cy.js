class DashboardPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }
  
  loginAsAdmin(username, password) {
      cy.get('[name="username"]').type(username);
      cy.get('[name="password"]').type(password);
      cy.get('[type="submit"]').click();
  }
  
  navigateToDirectory() {
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(9) > a:nth-child(1) > span:nth-child(2)").click();
  }
    
  verifyDirectoryPage() {
    cy.url().should('include', '/directory');
    cy.get('h6').should('contain.text', 'Directory');
  }

}


export default DashboardPage;  
