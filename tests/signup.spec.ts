import { test, expect } from '@playwright/test';

test('Sign Up - Success', async ({ page }) => {
  await page.goto('https://xaltsocnportal.web.app');
  await page.click('text=Sign Up');
  await page.fill('#email', 'testuser@example.com');
  await page.fill('#password', 'Test@1234');
  await page.click('text=Submit');
  await expect(page).toHaveURL(/dashboard/);
});

test('Sign Up - Invalid Email', async ({ page }) => {
  await page.goto('https://xaltsocnportal.web.app');
  await page.click('text=Sign Up');
  await page.fill('#email', 'invalid-email');
  await page.fill('#password', 'Test@1234');
  await page.click('text=Submit');
  await expect(page.locator('.error')).toContainText('Invalid email');
});
