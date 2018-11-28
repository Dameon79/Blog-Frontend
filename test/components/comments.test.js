import Comments from '../../components/shared/Comments'

describe('<Comments />', () => {
  it('it renders correctly', () => {
    const comment = {
      id: '1',
      title: 'This is a test comment',
      body: 'This is the comments main text with **markdown**',
      created_at: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
    }

    const component = shallow(
      <Comments comment={comment} />
    )

    expect(component).toMatchSnapshot()
  })
})
