// Imports:
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge class names:
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Truncate a string by word:
export function truncateByWord(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;

  const truncated = str.slice(0, maxLength);
  return truncated.slice(0, truncated.lastIndexOf(' ')) + '…';
}
