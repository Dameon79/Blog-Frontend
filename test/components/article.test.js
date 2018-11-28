import Article from '../../components/shared/Article'

describe('<Article />', () => {
  it('it renders correctly', () => {
    const article = {
      id: '1',
      title: 'This is a testing article',
      body: 'This is the articles main text with **markdown**',
      created_at: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
      comments: [{
        id: '1',
        name: 'Dameon Sumpton',
        body: 'This is a test **comment**',
        created_at: new Date(Date.UTC(97, 1, 2, 3, 4, 5))
      }]
    }

    const component = shallow(
      <Article article={article} />
    )

    expect(component).toMatchSnapshot()
  })
})
