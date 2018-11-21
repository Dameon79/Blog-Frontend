import NavBar from '../../components/shared/NavBar'

describe('<NavBar />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <NavBar />
    )

    expect(component).toMatchSnapshot()
  })
})