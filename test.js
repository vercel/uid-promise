const test = require('ava')
const UIDCHARS = require('./chars')
const uid = require('.')

test('uid should be correct length', async t => {
  const len = Math.floor(Math.random() * 1000)
  const u = await uid(len)
  t.is(u.length, len)
})

test('uid should contain only UIDCHARS', async t => {
  const u = await uid(20)
  u.split('').forEach(l => t.not(UIDCHARS.indexOf(l), -1))
})
