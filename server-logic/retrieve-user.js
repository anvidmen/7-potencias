/**
 * Retrieve user
 *
 * @param {string} userId the userId.
 *
 * @throws {UnexistanceError} if the user does not exist.
 *
 */

require('commons/polyfills/string')
const { errors: { UnexistenceError } } = require('commons')
const { models: { User } } = require('data')

module.exports = userId => {
  String.validate.notVoid(userId)

  return (async () => {
    const user = await User.findById(userId).lean()

    if (!user) throw new UnexistenceError(`user with id ${userId} does not exist`)

    delete user._id
    delete user.__v
    delete user.password

    return user
  })()
}
