describe('Callback', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/articles')
  })

  it('should display "Blog Articles" on the page', async () => {
    await expect(page).toMatch('Blog Articles')
  })
})
