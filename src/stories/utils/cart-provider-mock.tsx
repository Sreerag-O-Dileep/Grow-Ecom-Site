import { CartItem, CartContext } from "@/context/cart-context";
import { ReactNode, useState } from "react";


const CartContextProviderMock = ({ children, initialCart }: { children: ReactNode; initialCart: CartItem[] }) => {
    const [cart, setCart] = useState<CartItem[]>(initialCart);
  
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
  
    const mockValue = { cart, addItemToCart, removeItemFromCart };
  
    return <CartContext.Provider value={mockValue}>{children}</CartContext.Provider>;
  };

  export default CartContextProviderMock