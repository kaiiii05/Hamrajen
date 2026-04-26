import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Order, Product, RefundRequest } from '../types';

interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  orders: Order[];
  createOrder: (customer: any) => Order;
  refundRequests: RefundRequest[];
  submitRefund: (refund: Omit<RefundRequest, 'id' | 'createdAt' | 'status'>) => void;
  user: any;
  login: (email: string, password: string) => { success: boolean; message: string };
  register: (name: string, email: string, password: string) => { success: boolean; message: string };
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<Array<{ name: string; email: string; password: string }>>(() => {
    const saved = localStorage.getItem('har_users');
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('har_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('har_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [refundRequests, setRefundRequests] = useState<RefundRequest[]>(() => {
    const saved = localStorage.getItem('har_refunds');
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('har_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('har_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('har_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('har_refunds', JSON.stringify(refundRequests));
  }, [refundRequests]);

  useEffect(() => {
    localStorage.setItem('har_users', JSON.stringify(users));
  }, [users]);

  const addToCart = (product: Product, size: string, color: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, selectedSize: size, selectedColor: color, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCart((prev) => prev.filter(
      (item) => !(item.id === productId && item.selectedSize === size && item.selectedColor === color)
    ));
  };

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) => prev.map((item) =>
      item.id === productId && item.selectedSize === size && item.selectedColor === color
        ? { ...item, quantity }
        : item
    ));
  };

  const clearCart = () => setCart([]);

  const createOrder = (customer: any) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const newOrder: Order = {
      id: 'HAR-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      items: [...cart],
      total,
      status: 'confirmed',
      customer,
      createdAt: new Date().toISOString(),
    };
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const submitRefund = (refund: Omit<RefundRequest, 'id' | 'createdAt' | 'status'>) => {
    const newRefund: RefundRequest = {
      ...refund,
      id: 'REF-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setRefundRequests((prev) => [newRefund, ...prev]);
  };

  const login = (email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = users.find((item) => item.email.toLowerCase() === normalizedEmail);

    if (!existingUser) {
      return { success: false, message: 'No account found with that email.' };
    }

    if (existingUser.password !== password) {
      return { success: false, message: 'Incorrect password.' };
    }

    const sessionUser = { email: existingUser.email, name: existingUser.name };
    setUser(sessionUser);
    localStorage.setItem('har_user', JSON.stringify(sessionUser));
    return { success: true, message: 'Login successful.' };
  };

  const register = (name: string, email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();

    if (users.some((item) => item.email.toLowerCase() === normalizedEmail)) {
      return { success: false, message: 'Email is already registered.' };
    }

    const newAccount = {
      name: name.trim(),
      email: normalizedEmail,
      password
    };

    setUsers((prev) => [newAccount, ...prev]);
    return { success: true, message: 'Registered' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('har_user');
  };

  return (
    <AppContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, clearCart,
      orders, createOrder,
      refundRequests, submitRefund,
      user, login, register, logout
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
