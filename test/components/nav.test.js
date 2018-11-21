import Nav from '../../components/shared/Nav'

describe('<Nav />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Nav />
    )

    expect(component).toMatchSnapshot()
  })
})