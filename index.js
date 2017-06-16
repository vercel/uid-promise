const crypto = require('crypto')

const UIDCHARS = require('./chars')

// dashes
const DASHES = '-_'

// default options
let options = {
  useDashes: false
}

module.exports = (len, opts) => {
  if (typeof opts === 'object') {
    options = Object.assign(options, opts)
  }

  return new Promise((resolve, reject) => {
    if (typeof len !== 'number') {
      reject(new TypeError('You must supply a length integer to `uid-promise`.'))
      return
    }

    const CHARS = options.useDashes ? UIDCHARS + DASHES : UIDCHARS

    crypto.randomBytes(len, (err, buf) => {
      if (err) {
        return reject(err)
      }
      const str = []
      for (let i = 0; i < buf.length; i++) {
        str.push(CHARS[buf[i] % CHARS.length])
      }
      resolve(str.join(''))
    })
  })
}
