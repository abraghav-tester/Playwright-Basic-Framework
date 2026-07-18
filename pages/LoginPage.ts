import { Page, Locator } from "@playwright/test";

export class LoginPage {

    private readonly page: Page;
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly signonbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder("Email Address").first();
        this.password = page.getByPlaceholder("Password").first();
        this.signonbutton = page.locator("//button[@data-qa='login-button']");
    }

    async Navigatetologinpage() {
        await this.page.goto("https://automationexercise.com/login");
    }

    async EnterLogindetails(user: string, password: string) {
        await this.username.fill(user);
        await this.password.fill(password);
        await this.signonbutton.click();
    }
}