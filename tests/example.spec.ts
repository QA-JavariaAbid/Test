import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle('sss');
//   // Expect a title "to contain" a substring.
 console.log('1')
});
