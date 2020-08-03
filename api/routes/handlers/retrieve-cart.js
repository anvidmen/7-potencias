const { retrieveCart } = require('server-logic')
const { handleError } = require('../../helpers')

module.exports = (req, res) => {
  try {
    const { payload: { sub: userId } } = req

    retrieveCart(userId)
      .then(cart => res.send(cart))
      .catch(error => handleError(error, res))
  } catch (error) {
    handleError(error, res)
  }
}
