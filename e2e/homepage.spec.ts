import { test, expect } from "@playwright/test";

test("homepage loads and renders content", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toBeVisible();
  await expect(page).toHaveTitle(/./);
});
