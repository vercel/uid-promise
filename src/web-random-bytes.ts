import type { RandomBytes } from './types';

export const randomBytes: RandomBytes = (size, callback) => {
  if (size < 0 || size > 65536) {
    throw new RangeError(
      'The value of "size" is out of range. It must be >= 0 && <= 65536. Received ' +
        size,
    );
  }

  var array = new Uint8Array(size);
  globalThis.crypto.getRandomValues(array);

  if (!callback) {
    return array;
  }

  // Mimic async behavior with setTimeout
  setTimeout(() => callback(null, array), 0);

  return new Uint8Array();
};
