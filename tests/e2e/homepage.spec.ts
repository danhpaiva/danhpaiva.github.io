import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('tem o título correto na aba do browser', async ({ page }) => {
    await expect(page).toHaveTitle(/Daniel Paiva/);
  });

  test('renderiza o nome no hero', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Daniel Paiva', level: 1 });
    await expect(heading).toBeVisible();
  });

  test('exibe o indicador de disponibilidade', async ({ page }) => {
    const avail = page.locator('.avail-row');
    await expect(avail).toBeVisible();
    await expect(avail).toContainText('Disponível');
  });

  test('foto de perfil ou iniciais estão visíveis', async ({ page }) => {
    const photo = page.locator('.photo-frame');
    await expect(photo).toBeVisible();
  });

  test('exibe os botões de CTA no hero', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Ver Experiência/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /LinkedIn/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /GitHub/i }).first()).toBeVisible();
  });

  test('não tem erros de console', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });
});
