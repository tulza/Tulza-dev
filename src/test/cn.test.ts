import { expect, it, test } from 'vitest';
import { cn } from '../lib/utils';

test('test cn utils', () => {
  expect(cn('w-4 h-4', 'h-2')).toBe('w-4 h-2');
});

it('math is hard', () => {
  expect(2 + 2).toBe(4);
  expect(3 + 3).toBe(6);
});
