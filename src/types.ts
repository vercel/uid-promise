export type RandomBytes = (
  size: number,
  callback?: (err: Error | null, buf: Uint8Array) => void,
) => Uint8Array;
