describe('About', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/about')
  })

  it('should display "A little about me" sub-heading on page', async () => {
    await expect(page).toMatch('A little about me')
  })
})
