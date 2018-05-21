// Packages
const crypto = require('crypto')

// Utilities
const UIDCHARS = require('./chars')

module.exports = len => new Promise((resolve, reject) => {
  if (!Number.isInteger(len)) {
    reject(new TypeError('You must supply a length integer to `uid-promise`.'))
    return
  }

  if (len <= 0) {
    reject(new Error('You must supply a length integer greater than zero'))
    return
  }

  crypto.randomBytes(len, (err, buf) => {
    if (err) {
      return reject(err)
    }
    const str = []
    for (let i = 0; i < buf.length; i++) {
      str.push(UIDCHARS[buf[i] % UIDCHARS.length])
    }
    resolve(str.join(''))
  })
})
