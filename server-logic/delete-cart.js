require('commons/polyfills/string')
const { errors: { UnexistenceError } } = require('commons')
const { models: { User } } = require('data')
module.exports = (userId) => {
  String.validate.notVoid(userId)

  return (async () => {
    const user = await User.findById(userId)

    if (!user) throw new UnexistenceError(`user with id ${userId} does not exist`)

    user.cart = []

    return user.save()
  })()
}
