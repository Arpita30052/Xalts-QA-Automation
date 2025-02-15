import { test, expect } from '@playwright/test';

test('Sign In - Success', async ({ page }) => {
  await page.goto('https://xaltsocnportal.web.app');
  await page.click("//button[contains(text(),'Sign In')]");
  await page.click("//button[contains(text(),'Already have an account? Click here to sign in.')]");
  await page.fill('(//input[@id="outlined-basic"])[1]', 'testuser@example.com');
  await page.fill('(//input[@id="outlined-basic"])[2]', 'Test@1234');
  await page.click("//button[contains(text(),'Sign In')]");
});

test('Sign In - Invalid Credentials', async ({ page }) => {
  await page.goto('https://xaltsocnportal.web.app');
  await page.click("//button[contains(text(),'Sign In')]");
  await page.click("//button[contains(text(),'Already have an account? Click here to sign in.')]");
  await page.fill('(//input[@id="outlined-basic"])[1]', 'testuser@example.com');
  await page.fill('(//input[@id="outlined-basic"])[2]', 'WrongPass');
  await expect(page.locator("//button[contains(text(),'Sign In')]")).not.tobevisible();
  await expect(page.locator('.error')).toContainText('Password must contain atelast one lowercase letter, uppercase letter, number and special character and be a minimum of 8 characters in length');
});
