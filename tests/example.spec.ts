import { test, expect } from '@playwright/test';

test('Handle confirmation dialog', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Tài liệu học automation test - Playwright Việt Nam");
});

