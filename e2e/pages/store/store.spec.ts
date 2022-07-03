import { test, expect } from '@playwright/test'

test.describe('Página da loja', () => {
  test.describe('Em uma tela grande (> 375px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/loja')
    })
    test.use({
      viewport: {
        width: 1440,
        height: 1516
      }
    })
    test('deve carregar 9 itens por padrão', async ({ page }) => {
      const productCards = page.locator('.productCard')
      await expect(productCards).toHaveCount(9)
    })
    test('deve conter botões de paginação', async ({ page }) => {
      await expect(page).toHaveURL('/loja')
      const page1Button = page.locator('button', { hasText: '1' })
      const page2Button = page.locator('button', { hasText: '2' })
      const page3Button = page.locator('button', { hasText: '3' })
      const nextPageButton = page.locator('button', { hasText: 'Próximo' })
      await expect(page1Button).toBeVisible()
      await expect(page2Button).toBeVisible()
      await expect(page3Button).toBeVisible()
      await expect(nextPageButton).toBeVisible()
      await nextPageButton.click()
      await expect(page).toHaveURL('/loja?limit=9&page=2')
      await nextPageButton.click()
      const page4Button = page.locator('button', { hasText: '4' })
      await expect(page4Button).toBeVisible()
      await page4Button.click()
      const page5Button = page.locator('button', { hasText: '5' })
      await expect(page5Button).toBeVisible()
      await expect(page).toHaveURL('/loja?limit=9&page=4')
    })
    test('deve conter um texto mostrando o total de itens', async ({ page }) => {
      const totalFound = page.locator('text=62 produtos encontrados')
      await expect(totalFound).toBeVisible()
    })
    test('deve conter todos os filtros de preço', async ({ page }) => {
      const priceFilterAll = page.locator('text=Todos >> input[name="priceRange"]')
      await expect(priceFilterAll).toBeChecked()
      const priceFilterUpTo40 = page.locator('text="Até R$40" >> input[name="priceRange"]')
      await expect(priceFilterUpTo40).not.toBeChecked()
      const priceFilter40To60 = page.locator('text="R$40 A R$60" >> input[name="priceRange"]')
      await expect(priceFilter40To60).not.toBeChecked()
      const priceFilter60To100 = page.locator('text="R$60 A R$100" >> input[name="priceRange"]')
      await expect(priceFilter60To100).not.toBeChecked()
      const priceFilter100To200 = page.locator('text="R$100 A R$200" >> input[name="priceRange"]')
      await expect(priceFilter100To200).not.toBeChecked()
      const priceFilter200To500 = page.locator('text="R$200 A R$500" >> input[name="priceRange"]')
      await expect(priceFilter200To500).not.toBeChecked()
      const priceFilter500Plus = page.locator('text="Acima de R$500" >> input[name="priceRange"]')
      await expect(priceFilter500Plus).not.toBeChecked()
    })
    test('deve conter links de navegação no Header', async ({ page }) => {
      const clubLink = page.locator('a[href="/clube"]')
      await expect(clubLink).toBeVisible()
      const storeLink = page.locator('a[href="/loja"]')
      await expect(storeLink).toBeVisible()
      const makersLink = page.locator('a[href="/produtores"]')
      await expect(makersLink).toBeVisible()
      const offersLink = page.locator('a[href="/ofertas"]')
      await expect(offersLink).toBeVisible()
      const eventsLink = page.locator('a[href="/eventos"]')
      await expect(eventsLink).toBeVisible()
    })
    test('deve conter botão de busca no Header', async ({ page }) => {
      const showSearchButton = page.locator('.openSearchButton')
      await showSearchButton.click()
      await expect(page.locator('button', { hasText: 'Buscar' })).toBeVisible()
      await showSearchButton.click()
      await expect(page.locator('button', { hasText: 'Buscar' })).not.toBeVisible()
    })
    test('deve conter link para a conta do usuário no Header', async ({ page }) => {
      const accountLink = page.locator('a[href="/conta"]')
      await expect(accountLink).toBeVisible()
    })
  })
  test.describe('Em uma tela pequena (<= 375px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/loja')
      await page.waitForNavigation({ url: '/loja/mobile' })
    })
    test.use({
      viewport: {
        width: 375,
        height: 700
      }
    })
    test('deve carregar 8 itens por padrão', async ({ page }) => {
      const productCards = page.locator('.productCard')
      await expect(productCards).toHaveCount(8)
    })
    test('deve conter um texto mostrando o total de itens', async ({ page }) => {
      const totalFound = page.locator('text=62 produtos encontrados')
      await expect(totalFound).toBeVisible()
    })
    test('deve conter um botão para carregar mais itens', async ({ page }) => {
      const totalFoundAndShowing1 = page.locator('text=Exibindo 8 de 62 produtos no total')
      await expect(totalFoundAndShowing1).toBeVisible()
      const showMoreButton = page.locator('button', { hasText: 'Mostrar mais' })
      await showMoreButton.click()
      const totalFoundAndShowing2 = page.locator('text=Exibindo 16 de 62 produtos no total')
      await expect(totalFoundAndShowing2).toBeVisible()
    })
    test('deve conter um texto mostrando quantos itens estão sendo exibidos e o total de itens', async ({ page }) => {
      const totalFoundAndShowing = page.locator('text=Exibindo 8 de 62 produtos no total')
      await totalFoundAndShowing.scrollIntoViewIfNeeded()
      await expect(totalFoundAndShowing).toBeVisible()
    })
    test('deve conter botão de busca no Header', async ({ page }) => {
      const showSearchButton = page.locator('.openSearchButton')
      await showSearchButton.click()
      await expect(page.locator('button', { hasText: 'Buscar' })).toBeVisible()
      await showSearchButton.click()
      await expect(page.locator('button', { hasText: 'Buscar' })).not.toBeVisible()
    })
    test('deve não conter links de navegação no Header', async ({ page }) => {
      const clubLink = page.locator('a[href="/clube"]')
      await expect(clubLink).not.toBeVisible()
      const storeLink = page.locator('a[href="/loja"]')
      await expect(storeLink).not.toBeVisible()
      const makersLink = page.locator('a[href="/produtores"]')
      await expect(makersLink).not.toBeVisible()
      const offersLink = page.locator('a[href="/ofertas"]')
      await expect(offersLink).not.toBeVisible()
      const eventsLink = page.locator('a[href="/eventos"]')
      await expect(eventsLink).not.toBeVisible()
    })
    test('deve não conter link para a conta do usuário no Header', async ({ page }) => {
      const accountLink = page.locator('a[href="/conta"]')
      await expect(accountLink).not.toBeVisible()
    })
    test('deve não conter filtros de preço', async ({ page }) => {
      const priceFilterAll = page.locator('text=Todos >> input[name="priceRange"]')
      await expect(priceFilterAll).not.toBeVisible()
      const priceFilterUpTo40 = page.locator('text="Até R$40" >> input[name="priceRange"]')
      await expect(priceFilterUpTo40).not.toBeVisible()
      const priceFilter40To60 = page.locator('text="R$40 A R$60" >> input[name="priceRange"]')
      await expect(priceFilter40To60).not.toBeVisible()
      const priceFilter60To100 = page.locator('text="R$60 A R$100" >> input[name="priceRange"]')
      await expect(priceFilter60To100).not.toBeVisible()
      const priceFilter100To200 = page.locator('text="R$100 A R$200" >> input[name="priceRange"]')
      await expect(priceFilter100To200).not.toBeVisible()
      const priceFilter200To500 = page.locator('text="R$200 A R$500" >> input[name="priceRange"]')
      await expect(priceFilter200To500).not.toBeVisible()
      const priceFilter500Plus = page.locator('text="Acima de R$500" >> input[name="priceRange"]')
      await expect(priceFilter500Plus).not.toBeVisible()
    })
  })
})
