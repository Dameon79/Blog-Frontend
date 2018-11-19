import Footer from '../../components/Footer'

describes ('<Footer />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Footer />
    )
    
    expect(component).toMatchSnapshot()
  })
})