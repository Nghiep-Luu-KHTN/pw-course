import { test } from '@playwright/test';

test('Bai hoc 2', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click('//a[@href="02-xpath-product-page.html"]');

    await page.locator('(//button[@class="add-to-cart"][normalize-space()="Add to Cart"])[1]').dblclick();
    await page.locator('(//button[@class="add-to-cart"][normalize-space()="Add to Cart"])[2]').click(
        {
            clickCount: 3,
            delay: 500,
        }
    );
    await page.locator('(//button[@class="add-to-cart"][normalize-space()="Add to Cart"])[3]').click();
});    