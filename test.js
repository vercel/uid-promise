const uid = require('.')

uid(20).then(str => {
  console.log('random uid:', str)
})
