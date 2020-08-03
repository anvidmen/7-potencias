require('commons/polyfills/string')
require('commons/polyfills/number')
const { models: { Lesson } } = require('data')
const { errors: { DuplicityError } } = require('commons')

module.exports = (name, price, style, hour, minute, day, month, year) => {
  String.validate.notVoid(name)
  Number.validate(price)
  String.validate.notVoid(style)
  Number.validate(hour)
  Number.validate(minute)
  Number.validate(day)
  Number.validate(month)
  Number.validate(year)

  return (async () => {
    const lesson = await Lesson.findOne({ name })
    if (lesson) throw new DuplicityError(`Product with name ${name} already exits`)

    return Lesson.create({ name, price, style, hour, minute, day, month, year })
  })()
}
