import ArticleComment from '../../components/shared/ArticleComment'
jest.mock('../../lib/Auth')

describe('<ArticleComment />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <ArticleComment />
    )

    expect(component).toMatchSnapshot()
  })
})
