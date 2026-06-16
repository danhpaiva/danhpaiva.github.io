import { test, expect } from '@playwright/test';

test.describe('Navegação — Desktop', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('nav fixa está visível', async ({ page }) => {
    await expect(page.locator('nav')).toBeVisible();
  });

  test('logo da nav aponta para a raiz', async ({ page }) => {
    const logo = page.locator('.nav-logo');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', '/');
  });

  test('todos os links de navegação estão presentes', async ({ page }) => {
    const expectedLinks = ['Sobre', 'Experiência', 'Skills', 'Educação', 'Contato'];
    for (const label of expectedLinks) {
      await expect(page.locator('.nav-links').getByText(label)).toBeVisible();
    }
  });

  test('links de nav têm hrefs corretos', async ({ page }) => {
    const links = [
      { label: 'Sobre',       href: '#sobre' },
      { label: 'Experiência', href: '#experiencia' },
      { label: 'Skills',      href: '#skills' },
      { label: 'Educação',    href: '#educacao' },
      { label: 'Contato',     href: '#contato' },
    ];
    for (const { label, href } of links) {
      await expect(
        page.locator('.nav-links').getByRole('link', { name: label })
      ).toHaveAttribute('href', href);
    }
  });

  test('nav recebe classe scrolled após rolar a página', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 200));
    await expect(page.locator('nav')).toHaveClass(/scrolled/);
  });
});

test.describe('Navegação — Mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hamburger menu está visível no mobile', async ({ page }) => {
    await expect(page.locator('.nav-toggle')).toBeVisible();
  });

  test('links de desktop ficam ocultos no mobile', async ({ page }) => {
    await expect(page.locator('.nav-links')).toBeHidden();
  });

  test('menu mobile abre ao clicar no hamburger', async ({ page }) => {
    await page.locator('.nav-toggle').click();
    await expect(page.locator('.nav-mobile')).toHaveClass(/open/);
  });

  test('menu mobile fecha ao clicar em um link', async ({ page }) => {
    await page.locator('.nav-toggle').click();
    await expect(page.locator('.nav-mobile')).toHaveClass(/open/);
    await page.locator('.nav-mobile-link').first().click();
    await expect(page.locator('.nav-mobile')).not.toHaveClass(/open/);
  });
});
