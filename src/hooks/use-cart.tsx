import { createContext, useContext, useState } from "react";
interface Item {
  title: string;
  category: string;
  price: number;
  imageSrc: string;
}
interface CartContextProps {
  items: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  function addToCart(item: Item) {
    setItems((prev) => [...prev, item]);
  }

  function removeFromCart(item: Item) {
    setItems((prev) => prev.filter((i) => i.title !== item.title));
  }

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext)!;
}
