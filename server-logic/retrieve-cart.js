require('commons/polyfills/string')
const { errors: { UnexistenceError } } = require('commons')
const { models: { User } } = require('data')

module.exports = userId => {
  String.validate.notVoid(userId)

  return (async () => {
    const user = await User.findById(userId).lean().populate('cart.product')

    if (!user) throw new UnexistenceError(`user with id ${userId} does not exist`)

    return user.cart
  })()
}
