const { updateCart } = require('server-logic')
const { handleError } = require('../../helpers')

module.exports = (req, res) => {
  try {
    const { body: { productId, quantity } } = req

    const { payload: { sub: userId } } = req

    updateCart(userId, productId, parseInt(quantity))
      .then((cart) => res.status(200).send(cart))
      .catch(error => handleError(error, res))
  } catch (error) {
    handleError(error, res)
  }
}
