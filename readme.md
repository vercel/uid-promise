# uid-promise

[![Build Status](https://travis-ci.org/zeit/uid-promise.svg?branch=master)](https://travis-ci.org/zeit/uid-promise)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Creates a cryptographically secure UID with a 62 character range that can be safely used in URLs.

```js
import uid from 'uid-promise';
export default async function getURL () {
  const id = await uid(20);
  return `https://myhost.com/p/${id}`;
}
```

## API

**`uid(Number len) => Promise`**

- Return a `Promise` that resolves with a string of random characters
of length `len`.
- `len` must always be provided, else the promise is rejected
- Under the hood, `crypto.randomBytes` is used.
- Character set:

  ```
  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
  ```

## Authors

- Guillermo Rauch ([@rauchg](https://twitter.com/rauchg)) - [▲ZEIT](https://zeit.co)
- Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo)) - [▲ZEIT](https://zeit.co)
