import { randomBytes } from 'node:crypto';
import { generateUidFunction } from './uid.js';

export const uid = generateUidFunction(randomBytes);
