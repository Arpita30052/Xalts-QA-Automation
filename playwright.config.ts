import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory containing test files
  timeout: 30000, // 30 seconds timeout per test
  expect: {
    timeout: 5000, // 5 seconds timeout for assertions
  },
  reporter: 'html', // Generates an HTML report
  use: {
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000, // Timeout for each Playwright action
    navigationTimeout: 15000, // Timeout for page navigation
    baseURL: 'https://xaltsocnportal.web.app', // Base URL for the application
    trace: 'on', // Enable tracing for debugging
    screenshot: 'only-on-failure', // Capture screenshots on failure
    video: 'retain-on-failure', // Retain video recordings for failed tests
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});

