describe('Projects', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/projects')
  })

  it('should display "My Codepens" heading on page', async () => {
    await expect(page).toMatch('My Codepens')
  })
})
