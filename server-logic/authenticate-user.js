/**
 * check user credentials
 *
 * @param {string} email the user e-mail.
 * @param {string} password the user password.
 *
 * @throws {UnexistanceError} if the user with e-mail does not exist.
 * @throws {CredentialsError} If password is wrong.
 */

require('commons/polyfills/string')
const { models: { User } } = require('data')
const { utils: { Email }, errors: { UnexistenceError, CredentialsError } } = require('commons')
const bcrypt = require('bcryptjs')

module.exports = (email, password) => {
  String.validate.notVoid(email)
  Email.validate(email)
  String.validate.notVoid(password)

  return (async () => {
    const user = await User.findOne({ email })

    if (!user) throw new UnexistenceError(`user with e-mail ${email} does not exist`)

    const match = await bcrypt.compare(password, user.password)

    if (!match) throw new CredentialsError('wrong password')

    return user.id
  })()
}
