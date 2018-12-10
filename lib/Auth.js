import auth0 from 'auth0-js'
import Router from 'next/router'

class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dameon-blog.eu.auth0.com',
    clientID: 'H46xHenHPjnECrlwFEGd8uIdlYOBT9DT',
    redirectUri: `www.dameon-sumpton.com/callback`,
    responseType: 'token id_token',
    scope: 'openid profile'
  })

  constructor () { 
    this.login = this.login.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.logout = this.logout.bind(this)
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      throw new Error('No Access Token found')
    }
    return accessToken
  }

  login (path) {
    localStorage.setItem('return_to', path)
    this.auth0.authorize()
  }

  logout () {
    localStorage.clear()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        console.log(authResult)
      } else if (err) {
        console.log(err)
      }
    })
  }

  setSession (authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    localStorage.setItem('nickname', authResult.idTokenPayload.nickname)
    localStorage.setItem('picture', authResult.idTokenPayload.picture)
    this.redirectToOriginalPage()
  }

  redirectToOriginalPage () {
    Router.push(localStorage.getItem('return_to'))
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}

export default Auth