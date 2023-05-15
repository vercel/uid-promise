import type { RandomBytes } from './types';
import { randomBytes as nodeRandomBytes } from 'crypto';

export const randomBytes: RandomBytes = nodeRandomBytes;
