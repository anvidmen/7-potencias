const { env: { SECRET, EXP: EXPIRE_TIME } } = process

const { authenticateUser } = require('server-logic')
const { handleError } = require('../../helpers')
const { utils: { jwtPromised } } = require('commons')

module.exports = (req, res) => {
  const { body: { email, password } } = req

  try {
    authenticateUser(email, password)
      .then(userId => jwtPromised.sign({ sub: userId }, SECRET, { expiresIn: EXPIRE_TIME }))
      .then(token => res.send({ token }))
      .catch(error => handleError(error, res))
  } catch (error) {
    handleError(error, res)
  }
}
