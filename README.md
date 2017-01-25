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

or create a UID with a 64 character (using dashes)

```js
import uid from 'uid-promise';
export default async function getURL () {
  const id = await uid(20, {useDashes: true});
  return `https://myhost.com/p/${id}`;
}
```

## API

**`uid(Number len [, Object opts]) => Promise`**

- Return a `Promise` that resolves with a string of random characters
of length `len`.
- `len` must always be provided, else the promise is rejected
- Under the hood, `crypto.randomBytes` is used.
- Optionally you can use a character set with dashes (64)
- Character set (62 - without dashes):

  ```
  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
  ```
- Character set (64 - with dashes):

  ```
  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_
  ```


## Credits

- Copyright © 2016 Zeit, Inc and project authors.
- Licensed under MIT.
- ▲
