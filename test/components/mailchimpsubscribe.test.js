import MailchimpSubscribe from '../../components/shared/MailchimpSubscribe'

describe('<MailchimpSubscribe />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <MailchimpSubscribe />
    )

    expect(component).toMatchSnapshot()
  })
})