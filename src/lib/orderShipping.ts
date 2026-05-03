import { Order } from '../types';

export const SHIPPING_BASE_FEE = 58;
export const SHIPPING_DISCOUNTED_FEE = 3;
export const SHIPPING_PROMO_THRESHOLD = 249;
export const DELIVERY_START_DAYS = 3;
export const DELIVERY_END_DAYS = 5;

export type ResolvedOrderShipping = NonNullable<Order['shipping']>;

function addDaysIso(iso: string, days: number): string {
  const d = new Date(iso);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

export function formatDeliveryWindow(startIso: string, endIso: string): string {
  const start = new Date(startIso);
  const end = new Date(endIso);
  const sameMonth =
    start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
  if (sameMonth) {
    const month = start.toLocaleDateString('en-US', { month: 'short' });
    return `${month} ${start.getDate()}–${end.getDate()}`;
  }
  const fmt: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  return `${start.toLocaleDateString('en-US', fmt)} – ${end.toLocaleDateString('en-US', fmt)}`;
}

export function resolveOrderShipping(order: Order): ResolvedOrderShipping {
  if (order.shipping) return order.shipping;
  const qualifies = order.total >= SHIPPING_PROMO_THRESHOLD;
  return {
    estimatedDeliveryStart: addDaysIso(order.createdAt, DELIVERY_START_DAYS),
    estimatedDeliveryEnd: addDaysIso(order.createdAt, DELIVERY_END_DAYS),
    feeOriginal: SHIPPING_BASE_FEE,
    feeFinal: qualifies ? SHIPPING_DISCOUNTED_FEE : SHIPPING_BASE_FEE,
    promoThreshold: SHIPPING_PROMO_THRESHOLD,
  };
}

export function buildShippingSnapshot(orderSubtotal: number, placedAtIso: string): ResolvedOrderShipping {
  const qualifies = orderSubtotal >= SHIPPING_PROMO_THRESHOLD;
  return {
    estimatedDeliveryStart: addDaysIso(placedAtIso, DELIVERY_START_DAYS),
    estimatedDeliveryEnd: addDaysIso(placedAtIso, DELIVERY_END_DAYS),
    feeOriginal: SHIPPING_BASE_FEE,
    feeFinal: qualifies ? SHIPPING_DISCOUNTED_FEE : SHIPPING_BASE_FEE,
    promoThreshold: SHIPPING_PROMO_THRESHOLD,
  };
}
