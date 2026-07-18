import { test,expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
    await loginPage.Navigatetologinpage();
    await loginPage.EnterLogindetails('abhishek14@gmail.com', 'Madhvi@143');
});