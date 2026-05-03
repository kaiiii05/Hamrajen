/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { CartItem } from '../types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(price);
}

export function getOrderDisplayTitle(items: CartItem[]): string {
  if (items.length === 0) return 'Order';
  if (items.length === 1) return items[0].name;
  return `${items[0].name} +${items.length - 1} more`;
}
