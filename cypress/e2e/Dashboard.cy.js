import DashboardPage from '../POM/Dashboard.cy';

describe('Dashboard Tests', () => {
  const dashboardPage = new DashboardPage();

  it('should navigate to Directory page', () => {
    dashboardPage.visit();
    dashboardPage.loginAsAdmin('Admin', 'admin123');
    dashboardPage.navigateToDirectory();
    dashboardPage.verifyDirectoryPage();
  });
});
