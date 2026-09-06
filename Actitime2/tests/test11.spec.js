// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwrightlabs.com/');


  await page.waitForTimeout(5000);
});
