require('commons/polyfills/string')
const { models: { User } } = require('data')
const { errors: { UnexistenceError } } = require('commons')

module.exports = userId => {
  String.validate.notVoid(userId)

  return (async () => {
    const user = await User.findById(userId)

    if (!user) throw new UnexistenceError(`user with id ${userId} does not exist`)

    return User.deleteOne({ _id: userId })
  })()
}
