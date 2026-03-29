import { test } from '@playwright/test';

test('Bai hoc 3', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click('//a[@href="03-xpath-todo-list.html"]');

    page.on('dialog', async dialog => dialog.accept());

    for (let i = 1; i <= 100; i++) {
        await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
        await page.locator('//button[@id="add-task"]').click();
        await page.waitForTimeout(100);

        if (i % 2 !== 0) {
            await page.locator('//button[normalize-space()="Delete"]').last().click();
        }
    }
});