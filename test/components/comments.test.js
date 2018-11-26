import Comments from '../../components/shared/Comments'

describe('<Comments />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Comments />
    )

    expect(component).toMatchSnapshot()
  })
})