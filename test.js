const uid = require('.')

uid(20).then(str => {
  console.log('random uid without dashes:', str)
})

uid(20, true).then(str => {
  console.log('random uid with dashes:', str)
})
