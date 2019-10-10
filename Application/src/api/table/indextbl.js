import { getApiNoAuth } from '../utils'

export default {
  userlogin (window, username, password, realm, email) {
    return getApiNoAuth()
      .get('Users/login', {
        username: username,
        password: password,
        realm: realm,
        email: email

      })
      .then(function (response) {
        console.log(response)
        return response.data
      }).catch(function (err) {
        console.log(err)
      })
  }
}
