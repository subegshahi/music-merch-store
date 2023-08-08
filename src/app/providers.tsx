"use client";

import { CartProvider } from "@/hooks/use-cart";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
