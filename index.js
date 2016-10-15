const crypto = require('crypto')

// charset from github.com/coreh/uid2
const UIDCHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

module.exports = function (len) {
  return new Promise((resolve, reject) => {
    if (typeof len !== 'number') {
      reject(new TypeError('You must supply a length integer to `uid-promise`.'))
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
}
