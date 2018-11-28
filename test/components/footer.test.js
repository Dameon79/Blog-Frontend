import Footer from '../../components/shared/Footer'

describe('<Footer />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Footer />
    )

    expect(component).toMatchSnapshot()
  })
})