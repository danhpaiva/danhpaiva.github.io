import { test, expect } from '@playwright/test';

test.describe('Seções do currículo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ─── Sobre ────────────────────────────────────────────────────────────────

  test('célula Sobre está presente e visível', async ({ page }) => {
    await expect(page.locator('#sobre')).toBeVisible();
  });

  test('Sobre contém texto da bio', async ({ page }) => {
    await expect(page.locator('#sobre')).toContainText('.NET');
  });

  test('exibe os 4 cards de stats', async ({ page }) => {
    const stats = page.locator('.cell-stats .stat');
    await expect(stats).toHaveCount(4);
  });

  test('exibe cidade e modo de trabalho', async ({ page }) => {
    await expect(page.locator('.cell-location')).toContainText('Belo Horizonte');
    await expect(page.locator('.cell-location')).toContainText('Remoto');
  });

  // ─── Experiência ──────────────────────────────────────────────────────────

  test('célula Experiência está presente', async ({ page }) => {
    await expect(page.locator('#experiencia')).toBeVisible();
    await expect(page.locator('#experiencia')).toContainText('Experiência');
  });

  test('exibe os 3 empregos', async ({ page }) => {
    const jobs = page.locator('#experiencia .exp-item');
    await expect(jobs).toHaveCount(3);
  });

  test('Base2 Tecnologia está na lista', async ({ page }) => {
    await expect(page.locator('#experiencia')).toContainText('Base2 Tecnologia');
  });

  test('AeC está na lista', async ({ page }) => {
    await expect(page.locator('#experiencia')).toContainText('AeC');
  });

  test('Centro Universitário Una está na lista', async ({ page }) => {
    await expect(page.locator('#experiencia')).toContainText('Centro Universitário Una');
  });

  // ─── Skills ───────────────────────────────────────────────────────────────

  test('célula Skills está presente', async ({ page }) => {
    await expect(page.locator('#skills')).toBeVisible();
    await expect(page.locator('#skills')).toContainText('Skills');
  });

  test('exibe os 6 grupos de skills', async ({ page }) => {
    const groups = page.locator('#skills .skill-grp');
    await expect(groups).toHaveCount(6);
  });

  test('exibe pelo menos 10 itens de skill', async ({ page }) => {
    const items = page.locator('#skills .skill-grp li');
    expect(await items.count()).toBeGreaterThanOrEqual(10);
  });

  // ─── Educação ─────────────────────────────────────────────────────────────

  test('célula Educação está presente', async ({ page }) => {
    await expect(page.locator('#educacao')).toBeVisible();
    await expect(page.locator('#educacao')).toContainText('Educação');
  });

  test('exibe os 3 itens de formação', async ({ page }) => {
    const cards = page.locator('#educacao .edu-item');
    await expect(cards).toHaveCount(3);
  });

  test('PUC Minas está na educação', async ({ page }) => {
    await expect(page.locator('#educacao')).toContainText('PUC Minas');
  });

  // ─── Contato ──────────────────────────────────────────────────────────────

  test('célula Contato está presente', async ({ page }) => {
    await expect(page.locator('#contato')).toBeVisible();
    await expect(page.locator('#contato')).toContainText('LinkedIn');
  });

  test('exibe os 4 links de contato', async ({ page }) => {
    const links = page.locator('#contato .contact-item');
    await expect(links).toHaveCount(4);
  });
});
