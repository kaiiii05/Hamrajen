import { useEffect, useState } from 'react';
import type { Order } from '../types';

export type OrderTimelineSection =
  | 'to-pay'
  | 'to-ship'
  | 'to-receive'
  | 'to-rate'
  | 'cancelled';

export const EXPECTED_DELIVERY_MIN_DAYS = 2;
export const EXPECTED_DELIVERY_MAX_DAYS = 3;

function startOfLocalDay(d: Date): number {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x.getTime();
}

export function calendarDaysSinceOrder(createdAtIso: string, now: Date = new Date()): number {
  const ordered = startOfLocalDay(new Date(createdAtIso));
  const today = startOfLocalDay(now);
  return Math.max(0, Math.round((today - ordered) / 86400000));
}

export function getOrderTimelineSection(order: Order, now: Date = new Date()): OrderTimelineSection {
  if (order.status === 'cancelled') return 'cancelled';
  const d = calendarDaysSinceOrder(order.createdAt, now);
  if (d === 0) return 'to-pay';
  if (d === 1) return 'to-ship';
  if (d >= 2 && d <= EXPECTED_DELIVERY_MAX_DAYS) return 'to-receive';
  return 'to-rate';
}

export function useOrderTimelineClock(intervalMs = 60_000) {
  const [, setTick] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
}
