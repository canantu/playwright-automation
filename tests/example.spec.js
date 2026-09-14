import { test, expect } from "@playwright/test";

test("has title and get started link @test1", async ({ page }) => {
  // 1. Playwright resmi web sitesine git
  await page.goto("https://playwright.dev");

  // 2. Sayfa başlığının (Title) "Playwright" kelimesini içerdiğini doğrula
  await expect(page).toHaveTitle(/Playwright/);

  // 3. "Get started" metnine sahip olan link/buton elementini bul
  const getStartedLink = page.getByRole("link", { name: "Get started" });

  // 4. Linke tıkla
  await getStartedLink.click();

  // 5. Tıkladıktan sonra gelen yeni sayfanın URL'inin "/docs/intro" içerdiğini doğrula
  await expect(page).toHaveURL(/.*intro/);
});
