import Article from '../../components/shared/Article'

describe('<Article />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Article />
    )

    expect(component).toMatchSnapshot()
  })
})