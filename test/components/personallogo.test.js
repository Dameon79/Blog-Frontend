import PersonalLogo from '../../components/shared/PersonalLogo'

describe('<PersonalLogo />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <PersonalLogo />
    )

    expect(component).toMatchSnapshot()
  })
})