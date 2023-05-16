# uid-promise

Creates a cryptographically secure UID with a 62 character range that can be safely used in URLs.

## Usage

Install the package:

```js
npm i uid-promise
```

Then import it:

```js
import { uid } = from 'uid-promise';
```

Finally, call it:

```js
await uid(20);
```

## API

**`uid(Number len) => Promise`**

- Return a `Promise` that resolves with a string of random characters
  of length `len`
- `len` must always be provided, else the promise is rejected
- Under the hood, `crypto.randomBytes` is used
- Character set: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`

## Authors

- Guillermo Rauch ([@rauchg](https://twitter.com/rauchg)) - [Vercel](https://vercel.com)
- Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo)) - [Vercel](https://vercel.com)
