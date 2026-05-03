export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'men' | 'women' | 'new-arrivals' | 'best-sellers' | 'sale';
  images: string[];
  colorImages?: Record<string, string>;
  sizes: string[];
  colors: { name: string; hex: string }[];
  details: string[];
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'confirmed' | 'preparing' | 'shipped' | 'out-for-delivery' | 'delivered' | 'cancelled';
  customer: {
    fullName: string;
    address: string;
    phone: string;
    email: string;
    paymentMethod: string;
  };
  createdAt: string;
  shipping?: {
    estimatedDeliveryStart: string;
    estimatedDeliveryEnd: string;
    feeOriginal: number;
    feeFinal: number;
    promoThreshold: number;
  };
}

export interface RefundRequest {
  id: string;
  orderId: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  image?: string;
  notes: string;
  createdAt: string;
}
