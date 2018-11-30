describe('Contact', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/contact')
  })

  it('should display "Contact me form"  on the page', async () => {
    await expect(page).toMatch('Contact Me')
  })
})
