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

/** @param priceInPhp Amount in Philippine pesos (whole pesos; centavos shown when needed). */
export function formatPrice(priceInPhp: number) {
  return new Intl.NumberFormat('fil-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(priceInPhp);
}

export function getOrderDisplayTitle(items: CartItem[]): string {
  if (items.length === 0) return 'Order';
  if (items.length === 1) return items[0].name;
  return `${items[0].name} +${items.length - 1} more`;
}
