import { test, expect } from '@playwright/test';

test.describe('Links externos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ─── Atributos de segurança ───────────────────────────────────────────────

  test('todos os links externos têm target="_blank"', async ({ page }) => {
    const externalLinks = page.locator('a[href^="http"]');
    const count = await externalLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      await expect(externalLinks.nth(i)).toHaveAttribute('target', '_blank');
    }
  });

  test('todos os links externos têm rel com noopener', async ({ page }) => {
    const externalLinks = page.locator('a[href^="http"]');
    const count = await externalLinks.count();

    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute('rel');
      expect(rel).toContain('noopener');
    }
  });

  // ─── Hrefs corretos ───────────────────────────────────────────────────────

  test('link do LinkedIn aponta para o perfil correto', async ({ page }) => {
    const linkedinLinks = page.locator('a[href="https://www.linkedin.com/in/danhpaiva/"]');
    await expect(linkedinLinks.first()).toBeVisible();
  });

  test('link do GitHub aponta para o perfil correto', async ({ page }) => {
    const githubLinks = page.locator('a[href="https://github.com/danhpaiva"]');
    await expect(githubLinks.first()).toBeVisible();
  });

  test('link de e-mail tem href mailto correto', async ({ page }) => {
    const emailLink = page.locator('a[href="mailto:danpaiva@live.com"]');
    await expect(emailLink.first()).toBeVisible();
  });

  test('link do Telegram aponta para o canal correto', async ({ page }) => {
    const telegramLink = page.locator('a[href="https://t.me/danhpaiva"]');
    await expect(telegramLink.first()).toBeVisible();
  });

  // ─── Links internos (âncoras) ─────────────────────────────────────────────

  test('âncoras de navegação não têm target="_blank"', async ({ page }) => {
    const anchorLinks = page.locator('a[href^="#"]');
    const count = await anchorLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const target = await anchorLinks.nth(i).getAttribute('target');
      expect(target).toBeNull();
    }
  });

  // ─── SEO ──────────────────────────────────────────────────────────────────

  test('meta description está presente e não está vazia', async ({ page }) => {
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveCount(1);
    const content = await metaDesc.getAttribute('content');
    expect(content?.length).toBeGreaterThan(50);
  });

  test('Open Graph title está presente', async ({ page }) => {
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveCount(1);
    const content = await ogTitle.getAttribute('content');
    expect(content).toContain('Daniel Paiva');
  });

  test('canonical URL está presente', async ({ page }) => {
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveCount(1);
  });
});
