describe('Callback', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/callback')
  })

  it('should display "logging you in" on the page', async () => {
    await expect(page).toMatch('Logging you in...')
  })
})
