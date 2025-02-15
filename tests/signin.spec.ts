import { test, expect } from '@playwright/test';

test('Sign In - Success', async ({ page }) => {
  await page.goto('https://xaltsocnportal.web.app');
  await page.fill('#email', 'testuser@example.com');
  await page.fill('#password', 'Test@1234');
  await page.click('text=Login');
  await expect(page).toHaveURL(/dashboard/);
});

test('Sign In - Invalid Credentials', async ({ page }) => {
  await page.goto('https://xaltsocnportal.web.app');
  await page.fill('#email', 'testuser@example.com');
  await page.fill('#password', 'WrongPass');
  await page.click('text=Login');
  await expect(page.locator('.error')).toContainText('Invalid credentials');
});
