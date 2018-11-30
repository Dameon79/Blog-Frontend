describe('Article', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/article/ruby-classes-objects-and-methods')
  })

  it('should display "Ruby Classes, Objects and Methods" heading on page', async () => {
    await expect(page).toMatch('Ruby Classes, Objects and Methods')
  })
})
