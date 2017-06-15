const test = require('ava')
const uid = require('.')

test('uid should be correct length', async t => {
  const len = Math.floor(Math.random() * 1000)
  const u = await uid(len)
  t.is(u.length, len)
})
