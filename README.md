# uid-promise [![Build Status](https://travis-ci.org/zeit/uid-promise.svg?branch=master)](https://travis-ci.org/zeit/uid-promise)

Creates a cryptographically secure UID with a 62 character range that
can be safely used in URLs.


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

## Credits

- Copyright © 2016 Zeit, Inc and project authors.
- Licensed under MIT.
- ▲
