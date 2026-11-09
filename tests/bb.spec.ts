import { test, expect } from '@playwright/test';

test.describe('Site do Banco do Brasil', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/site/');
  });

  test('deve carregar a home com o título correto', async ({ page }) => {
    await expect(page).toHaveTitle(/Banco do Brasil/i);
  });

  test('deve exibir o logo e o menu principal', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Logo do BB' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Pra Você' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Pro Seu Negócio' })).toBeVisible();
  });

  test('deve abrir o submenu e navegar para outra página', async ({ page }) => {
    await page.getByRole('button', { name: 'Pra Você' }).click();
    await page.getByRole('menuitem', { name: 'Cartões' }).click();
    await expect(page).toHaveURL(/cartoes/i);
  });
});