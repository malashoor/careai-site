import { test, expect } from '@playwright/test';

test('feature icons are visible', async ({ page }) => {
  await page.goto('/');
  const svgs = page.locator('section:has-text("Key Features") svg');
  const count = await svgs.count();
  for (let i = 0; i < count; i++) {
    const color = await svgs.nth(i).evaluate(el => getComputedStyle(el).color);
    expect(color).not.toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
  }
});
