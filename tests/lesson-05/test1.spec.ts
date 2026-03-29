import { test } from '@playwright/test';

test('Bai hoc 1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click('//a[@href="01-xpath-register-page.html"]');
    
    await page.locator('//input[@id="username"]').fill('Stevie');
    await page.locator('//input[@id="email"]').fill('stevie08@email.com');
    
    await page.locator('//input[@id="male"]').check();
    await page.locator('//input[@id="reading"]').check();
    await page.locator('//input[@id="traveling"]').check();
    
    await page.locator("//select[@id='interests']").selectOption({ label: 'Technology' });
    await page.locator("//select[@id='country']").selectOption({ label: 'United Kingdom' });

    await page.locator('//input[@id="dob"]').pressSequentially('0102');
    await page.keyboard.press('Tab');
    await page.locator('//input[@id="dob"]').pressSequentially('1998');

    await page.locator("//input[@id='profile']").setInputFiles("C:/Users/ADMIN/Downloads/CV_image.jpg");

    await page.locator('//textarea[@id="bio"]').fill('Hello World!');
    await page.locator('//input[@id="rating"]').fill('8');
    
    await page.locator('input[type="color"]').evaluate(element => {
    (element as HTMLInputElement).value = '#fca8ac'; // Set the desired color value
    });
    await page.locator('//span[@class="slider round"]').click();  
    
      // Locate the element
    const startRatingElement = page.locator('//div[@id="starRating"]');
    // Get the bounding box
    const box = await startRatingElement.boundingBox();
    if (!box) {
        throw new Error("Could not find bounding box for element");
    }
    // Rating 5 star
    await page.mouse.click(box.x + 99, box.y + box.height / 2);

    await page.locator('//button[normalize-space()="Register"]').click();
});