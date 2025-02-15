import { test, expect } from '@playwright/test';

test('Sign Out', async ({ page }) => {
  await page.goto('https://xaltsocnportal.web.app');
  await page.fill('#email', 'testuser@example.com');
  await page.fill('#password', 'Test@1234');
  await page.click('text=Login');
  await page.click('text=Sign Out');
  await expect(page).toHaveURL(/login/);
});
