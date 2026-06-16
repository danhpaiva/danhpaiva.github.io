import { test, expect } from '@playwright/test';

test.describe('Seções do currículo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ─── Sobre ────────────────────────────────────────────────────────────────

  test('seção Sobre está presente e visível', async ({ page }) => {
    const section = page.locator('#sobre');
    await expect(section).toBeVisible();
    await expect(section.getByRole('heading', { name: 'Quem sou eu' })).toBeVisible();
  });

  test('Sobre exibe os 4 cards de stats', async ({ page }) => {
    const stats = page.locator('#sobre .stat-card');
    await expect(stats).toHaveCount(4);
  });

  test('Sobre exibe cidade e modo de trabalho', async ({ page }) => {
    await expect(page.locator('#sobre')).toContainText('Belo Horizonte');
    await expect(page.locator('#sobre')).toContainText('Remoto');
  });

  // ─── Experiência ──────────────────────────────────────────────────────────

  test('seção Experiência está presente', async ({ page }) => {
    const section = page.locator('#experiencia');
    await expect(section).toBeVisible();
    await expect(section.getByRole('heading', { name: 'Experiência' })).toBeVisible();
  });

  test('timeline exibe os 3 empregos', async ({ page }) => {
    const jobs = page.locator('#experiencia .timeline-item');
    await expect(jobs).toHaveCount(3);
  });

  test('Base2 Tecnologia está na timeline', async ({ page }) => {
    await expect(page.locator('#experiencia')).toContainText('Base2 Tecnologia');
  });

  test('AeC está na timeline', async ({ page }) => {
    await expect(page.locator('#experiencia')).toContainText('AeC');
  });

  test('Centro Universitário Una está na timeline', async ({ page }) => {
    await expect(page.locator('#experiencia')).toContainText('Centro Universitário Una');
  });

  // ─── Skills ───────────────────────────────────────────────────────────────

  test('seção Skills está presente', async ({ page }) => {
    const section = page.locator('#skills');
    await expect(section).toBeVisible();
    await expect(section.getByRole('heading', { name: 'Skills & Tecnologias' })).toBeVisible();
  });

  test('exibe os 6 grupos de skills', async ({ page }) => {
    const groups = page.locator('#skills .skill-group');
    await expect(groups).toHaveCount(6);
  });

  test('barras de skill estão presentes', async ({ page }) => {
    const bars = page.locator('#skills .skill-bar-bg');
    await expect(bars).toHaveCount(await bars.count());
    // Garante que há pelo menos 10 barras (5 skills × 2 grupos mínimo)
    expect(await bars.count()).toBeGreaterThanOrEqual(10);
  });

  // ─── Educação ─────────────────────────────────────────────────────────────

  test('seção Educação está presente', async ({ page }) => {
    const section = page.locator('#educacao');
    await expect(section).toBeVisible();
    await expect(section.getByRole('heading', { name: 'Educação' })).toBeVisible();
  });

  test('exibe os 2 cards de formação', async ({ page }) => {
    const cards = page.locator('#educacao .edu-card');
    await expect(cards).toHaveCount(2);
  });

  test('PUC Minas está nos cards', async ({ page }) => {
    await expect(page.locator('#educacao')).toContainText('PUC Minas');
  });

  // ─── Contato ──────────────────────────────────────────────────────────────

  test('seção Contato está presente', async ({ page }) => {
    const section = page.locator('#contato');
    await expect(section).toBeVisible();
    await expect(section.getByRole('heading', { name: 'Entre em Contato' })).toBeVisible();
  });

  test('exibe os 4 links de contato', async ({ page }) => {
    const links = page.locator('#contato .contact-link');
    await expect(links).toHaveCount(4);
  });
});
