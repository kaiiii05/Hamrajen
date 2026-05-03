import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, CreditCard, Package, Truck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatPrice, cn, getOrderDisplayTitle } from '../lib/utils';
import {
  EXPECTED_DELIVERY_MAX_DAYS,
  EXPECTED_DELIVERY_MIN_DAYS,
  getOrderTimelineSection,
  useOrderTimelineClock,
} from '../lib/orderTimeline';

const sectionLabels: Record<
  'to-pay' | 'to-ship' | 'to-receive' | 'to-rate' | 'cancelled',
  string
> = {
  'to-pay': 'To Pay',
  'to-ship': 'To Ship',
  'to-receive': 'To Receive',
  'to-rate': 'To Rate',
  cancelled: 'Cancelled',
};

const SHIPPING_FEE_PHP = 70;

function addCalendarDays(iso: string, days: number): Date {
  const d = new Date(iso);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDeliveryDateRange(from: Date, to: Date): string {
  const sameMonth =
    from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear();
  if (sameMonth) {
    const month = from.toLocaleDateString('en-US', { month: 'short' });
    return `${month} ${from.getDate()}–${to.getDate()}`;
  }
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  return `${from.toLocaleDateString('en-US', opts)} – ${to.toLocaleDateString('en-US', opts)}`;
}

export default function OrderDetail() {
  useOrderTimelineClock();
  const { orderId } = useParams<{ orderId: string }>();
  const { orders, cancelOrder } = useApp();
  const navigate = useNavigate();

  const order = orders.find((o) => o.id === orderId);
  const timelineSection = order ? getOrderTimelineSection(order) : null;
  const canCancel =
    order &&
    order.status !== 'cancelled' &&
    (timelineSection === 'to-pay' || timelineSection === 'to-ship');

  const handleCancel = () => {
    if (!order) return;
    if (!window.confirm('Cancel this order? This cannot be undone.')) return;
    const ok = cancelOrder(order.id);
    if (!ok) {
      window.alert('This order can no longer be cancelled.');
    }
  };

  if (!order) {
    return (
      <div className="bg-brand-beige min-h-screen py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Package size={48} className="text-gray-200 mx-auto mb-6" />
          <h1 className="text-3xl font-serif mb-4 italic">Order not found</h1>
          <p className="text-gray-500 text-sm mb-10">This order may have been removed or the link is incorrect.</p>
          <Link
            to="/account"
            className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest border-b border-brand-black pb-1"
          >
            <ArrowLeft size={14} />
            Back to My Orders
          </Link>
        </div>
      </div>
    );
  }

  const section = getOrderTimelineSection(order);
  const deliveryFrom = addCalendarDays(order.createdAt, EXPECTED_DELIVERY_MIN_DAYS);
  const deliveryTo = addCalendarDays(order.createdAt, EXPECTED_DELIVERY_MAX_DAYS);
  const deliveryRangeLabel = formatDeliveryDateRange(deliveryFrom, deliveryTo);

  return (
    <div className="bg-brand-beige min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-gray-500 hover:text-brand-black mb-10 transition-colors"
        >
          <ArrowLeft size={14} />
          Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-brand-gray shadow-sm overflow-hidden"
        >
          <div className="p-8 md:p-10 border-b border-brand-gray flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <p
                className={cn(
                  'text-[10px] uppercase font-bold tracking-widest mb-2',
                  order.status === 'cancelled' ? 'text-red-500' : 'text-brand-gold'
                )}
              >
                {sectionLabels[section]}
              </p>
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight break-words">
                {getOrderDisplayTitle(order.items)}
              </h1>
              <p className="text-[10px] text-gray-400 mt-2">
                Placed {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[9px] uppercase font-bold tracking-widest text-gray-400 mb-1">Order total</p>
              <p className="text-2xl font-serif">{formatPrice(order.total)}</p>
              <p className="text-[10px] text-gray-500 mt-4 max-w-xs md:ml-auto leading-relaxed">
                Fulfillment updates appear here as your order moves through each stage.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-10">
            {order.status !== 'cancelled' && (
              <div className="flex gap-4 p-5 border border-brand-gray bg-brand-beige/60">
                <div className="p-3 bg-white border border-brand-gray h-fit shrink-0">
                  <Truck size={22} className="text-brand-gold" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] uppercase font-bold tracking-widest text-gray-400 mb-2">
                    Delivery
                  </p>
                  {section === 'to-rate' ? (
                    <p className="text-sm text-gray-800 font-medium">Delivered</p>
                  ) : (
                    <>
                      <p className="text-sm text-gray-800 font-medium">
                        Expected delivery: 2–3 days
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Estimated arrival by {deliveryRangeLabel}
                      </p>
                    </>
                  )}
                  <p className="text-sm text-gray-700 mt-3">
                    Shipping fee:{' '}
                    <span className="font-medium text-brand-charcoal">{formatPrice(SHIPPING_FEE_PHP)}</span>
                  </p>
                </div>
              </div>
            )}

            <div>
              <h2 className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-4">Items</h2>
              <ul className="divide-y divide-brand-gray border border-brand-gray">
                {order.items.map((item, idx) => (
                  <li key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${idx}`} className="flex gap-4 p-4">
                    <img
                      src={item.images[0]}
                      alt=""
                      className="w-16 h-20 object-cover border border-brand-gray shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <p className="font-serif text-lg leading-tight">{item.name}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                        {item.selectedColor} · Size {item.selectedSize} · Qty {item.quantity}
                      </p>
                      <p className="text-sm mt-2">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="p-3 bg-brand-beige border border-brand-gray h-fit">
                  <MapPin size={22} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold tracking-widest text-gray-400 mb-2">
                    Shipping address
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{order.customer.fullName}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">{order.customer.address}</p>
                  <p className="text-sm text-gray-600 mt-2">{order.customer.phone}</p>
                  <p className="text-sm text-gray-600">{order.customer.email}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-brand-beige border border-brand-gray h-fit">
                  <CreditCard size={22} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold tracking-widest text-gray-400 mb-2">Payment</p>
                  <p className="text-sm text-gray-600">{order.customer.paymentMethod}</p>
                </div>
              </div>
            </div>

            {canCancel && (
              <div className="pt-6 border-t border-brand-gray flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-gray-500">
                  Need to change plans? You can cancel before this order ships.
                </p>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-[10px] uppercase font-bold tracking-widest border border-red-500 text-red-600 px-6 py-3 hover:bg-red-500 hover:text-white transition-colors shrink-0"
                >
                  Cancel order
                </button>
              </div>
            )}

            {order.status === 'cancelled' && (
              <p className="text-sm text-gray-500 italic">This order was cancelled.</p>
            )}
          </div>

          <div className="bg-brand-beige/80 px-8 md:px-10 py-4 border-t border-brand-gray flex items-center justify-between">
            <Link to="/account" className="text-[10px] uppercase font-bold tracking-widest hover:text-brand-gold">
              My Orders
            </Link>
            <Link to="/shop" className="text-[10px] uppercase font-bold tracking-widest text-gray-500 hover:text-brand-black">
              Continue shopping
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
