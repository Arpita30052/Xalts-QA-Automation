import { test, expect } from '@playwright/test';

test('Sign Up - Success', async ({ page }) => {
  await page.goto('https://xaltsocnportal.web.app');
  await page.click("//button[contains(text(),'Sign In')]");
  await page.fill('(//input[@id="outlined-basic"])[1]', 'testuser@example.com');
  await page.fill('(//input[@id="outlined-basic"])[2]', 'Test@1234');
  await page.fill('(//input[@id="outlined-basic"])[3]', 'Test@1234');
  await page.click("//button[contains(text(),'Sign Up')]");
  await expect(page).toHaveURL(/dashboard/);
});

test('Sign Up - Invalid Email', async ({ page }) => {
  await page.goto('https://xaltsocnportal.web.app');
  await page.click("//button[contains(text(),'Sign In')]");
  await page.fill('(//input[@id="outlined-basic"])[1]', 'invalidemail@com');
  await page.fill((//input[@id="outlined-basic"])[2]', 'Test@1234');
  await page.fill('(//input[@id="outlined-basic"])[3]', 'Test@1234');
  await expect(page.locator("//button[contains(text(),'Sign Up')]")).not.tobevisible();
});
