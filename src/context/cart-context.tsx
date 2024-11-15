'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/lib/definitions';

type CartProduct = Pick<Product, 'id' | 'name' | 'discountedprice' | 'image' | 'type' | 'usagetype'>;

export interface CartItem extends CartProduct {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(savedCart);
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const addItemToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeItemFromCart = (item: CartItem) => {
    setCart((prevCart) => {
      if (item.quantity === 1) {
        return prevCart.filter(i => i.id !== item.id);
      } else {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
    });
  };
  

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
