describe('Index', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should display "Blog Articles" heading on page', async () => {
    await expect(page).toMatch('Blog Articles')
  })
})
