import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timeTextDelay = (arr: string[], stagger: number, gap: number = 0): number[] => {
  return arr.map((text) => text.length * stagger + gap);
};

export const nextTextDelayTime = (delays: number[], index: number, offset: number = 0): number => {
  return delays.slice(0, index).reduce((acc, val) => acc + val, offset);
};

export const splitStringUsingRegex = (input: string) => {
  const letters: string[] = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(input)) != null) {
    letters.push(match[0]);
  }
  return letters;
};
