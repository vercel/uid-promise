// Packages
const test = require('node:test');
const assert = require('node:assert')

// Utilities
const {UIDCHARS} = require('../lib/cjs/chars');
const { uid } = require('../lib/cjs');

test('should be correct length', async () => {
  const len = 1 + Math.floor(Math.random() * 1000);
  const u = await uid(len);
  assert.strictEqual(u.length, len);
});

test('should contain only UIDCHARS', async () => {
  const u = await uid(20);
  u.split('').forEach((l) => assert.notStrictEqual(UIDCHARS.indexOf(l), -1));
});

test('should throw if no integer supplied', async () => {
  uid()
    .then(console.log)
    .catch((err) => {
      assert.strictEqual(err instanceof Error, true);
    });
});

test('should throw if integer is not positive value', async () => {
  uid(0)
    .then(console.log)
    .catch((err) => {
      assert.strictEqual(err instanceof Error, true);
    });
});
