"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  category: string;
  price: number;
  imageSrc: any;
}

export default function ProductCard({
  title,
  category,
  price,
  imageSrc,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<ProductCardProps[]>([]);
  // console.log(addToCart);

  const handleAddToCart = () => {
    const item = { category, title, price, imageSrc };

    const existingItem = cartItems.find(
      (cartItem) => cartItem.title === item.title
    );
    if (existingItem) {
      toast({
        description: "This item is already in your cart",
        className: "bg-yellow-400 text-black border-0 rounded-xl",
        action: <AlertCircle />,
      });
    } else {
      addToCart(item);
      setCartItems([...cartItems, item]);
      toast({
        description: "Product added to cart",
        className: "bg-emerald-600 border-0 rounded-xl",
        action: <CheckCircle2 />,
      });
    }
  };

  return (
    <div className="mt-5 flex cursor-pointer items-center overflow-hidden  rounded-2xl border border-white/10 bg-neutral-800">
      <div className="h-full w-full bg-pattern bg-contain">
        <Image
          className="h-56 w-full object-cover"
          src={imageSrc}
          placeholder="blur"
          alt="product images"
        />

        <div className=" border-t border-white/10 p-5">
          <div className="items-end justify-between">
            <h1 className="truncate text-lg">{title}</h1>
            <h2 className="truncate text-neutral-500">{category}</h2>
            <h3 className="mt-2 truncate text-xl">Rs. {price}</h3>
          </div>

          <div>
            {/* <Button className="mt-5 w-full truncate rounded-xl bg-violet-500 font-normal text-white hover:bg-violet-400">
              Buy Now
            </Button> */}

            <Button className="mt-5 w-full truncate" onClick={handleAddToCart}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
