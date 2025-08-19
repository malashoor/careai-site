import { test, expect } from '@playwright/test';

test('no hydration overlay', async ({ page }) => {
  await page.goto('/');
  const overlay = page.locator('text=/Hydration failed|did not match/i');
  await expect(overlay).toHaveCount(0);
});
