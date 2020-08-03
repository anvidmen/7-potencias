const { utils: { call } } = require('commons')
const context = require('./context')

module.exports = function () {
  const { token } = this.storage

  return call('DELETE', `${this.API_URL}/carts`, undefined, { Authorization: `Bearer ${token}`, 'Content-type': 'application/json' })
    .then(({ status, body }) => {
      if (status !== 200) {
        const { error } = JSON.parse(body)

        throw new Error(error)
      }
    })
}.bind(context)
