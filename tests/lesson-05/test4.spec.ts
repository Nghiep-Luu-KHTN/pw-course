import { test } from '@playwright/test';

test('Bai hoc 4', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click('//a[@href="04-xpath-personal-notes.html"]');

    await page.locator('//input[@id="note-title"]').fill('Number 1');
    await page.locator('//textarea[@id="note-content"]').fill('Alisson');
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill('Number 2');
    await page.locator('//textarea[@id="note-content"]').fill('Joe Gomez');
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill('Number 3');
    await page.locator('//textarea[@id="note-content"]').fill('Endo');
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill('Number 4');
    await page.locator('//textarea[@id="note-content"]').fill('VVD');
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill('Number 5');
    await page.locator('//textarea[@id="note-content"]').fill('Konate');
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill('Number 6');
    await page.locator('//textarea[@id="note-content"]').fill('Kerkez');
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill('Number 7');
    await page.locator('//textarea[@id="note-content"]').fill('Wirtz');
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill('Number 8');
    await page.locator('//textarea[@id="note-content"]').fill('Szoboszlai');
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill('Number 9');
    await page.locator('//textarea[@id="note-content"]').fill('Isak');
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill('Number 10');
    await page.locator('//textarea[@id="note-content"]').fill('Mac Allister');
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="search"]').pressSequentially('Szoboszlai', {
        delay: 100,
    })
});