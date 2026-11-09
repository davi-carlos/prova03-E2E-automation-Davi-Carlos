import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: 'https://www.bb.com.br/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    process.env.CI
      ? { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
      : { name: 'chrome', use: { ...devices['Desktop Chrome'], channel: 'chrome' } },
  ],
});