const { utils: { call } } = require('commons')
const context = require('./context')

module.exports = function () {
  return call('GET', `${this.API_URL}/lessons/search`, undefined, undefined)
    .then(({ status, body }) => {
      return JSON.parse(body)
    })
}.bind(context)
