// Packages
const test = require('ava')

// Utilities
const UIDCHARS = require('../lib/chars')
const uid = require('../lib')

test('should be correct length', async t => {
  const len = 1 + Math.floor(Math.random() * 1000)
  const u = await uid(len)
  t.is(u.length, len)
})

test('should contain only UIDCHARS', async t => {
  const u = await uid(20)
  u.split('').forEach(l => t.not(UIDCHARS.indexOf(l), -1))
})

test('should throw if no integer supplied', async t => {
  uid().then(uid => {}).catch(err => {
    t.is(err instanceof Error, true)
  })
})

test('should throw if integer is not positive value', async t => {
  uid(0).then(uid => {}).catch(err => {
    t.is(err instanceof Error, true)
  })
})
