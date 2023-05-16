// Packages
import test from 'test';
import assert from 'node:assert';

// Utilities
import {UIDCHARS} from '../lib/esm/chars.js';
import {uid} from '../lib/esm/index.js';

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
