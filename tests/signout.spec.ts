import { test, expect } from '@playwright/test';

test('Sign Out', async ({ page }) => {
  await page.goto('https://xaltsocnportal.web.app');
  await page.click("//button[contains(text(),'Sign In')]");
  await page.click("//button[contains(text(),'Already have an account? Click here to sign in.')]");
  await page.fill('(//input[@id="outlined-basic"])[1]', 'testuser@example.com');
  await page.fill('(//input[@id="outlined-basic"])[2]', 'Test@1234');
  await page.click("//button[contains(text(),'Sign In')]");
  await expect(page.locator("//button[contains(text(),'Sign Out')]")).tobevisible();
  await page.click("//button[contains(text(),'Sign Out')]");
  await expect(page.locator("//button[contains(text(),'Sign In')]")).tobevisible();
});
