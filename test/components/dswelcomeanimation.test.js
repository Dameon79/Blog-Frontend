import DsWelcomeAnimation from '../../components/shared/DsWelcomeAnimation'

describe('<DsWelcomeAnimation />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <DsWelcomeAnimation />
    )

    expect(component).toMatchSnapshot()
  })
})