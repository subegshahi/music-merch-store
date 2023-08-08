import Image from "next/image";
import sweatShirt from "public/images/sweat-shirt.png";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Trash2 } from "lucide-react";

export default function CartItems() {
  const { items, removeFromCart } = useCart();
  // console.log(items);

  function handleRemoveItem() {
    removeFromCart(items[0]);
  }

  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="rounded-xl border border-white/10 bg-neutral-800 p-4"
          >
            <div className="flex gap-5">
              <Image
                className="rounded-xl"
                src={item.imageSrc}
                width={100}
                height={100}
                placeholder="blur"
                alt="check out product images"
              />

              <div className="flex flex-1 justify-between">
                <div className="w-1/2 grid-cols-2 items-center gap-10 md:grid">
                  <div>
                    <h1 className="text-lg">{item.category}</h1>
                    <h1 className="font-semibold text-neutral-400">
                      {item.title} / M
                    </h1>
                  </div>

                  <input
                    className="mt-3 w-1/2 rounded-md bg-neutral-700 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-violet-400 md:py-2"
                    type="number"
                    min="1"
                    defaultValue={1}
                  />
                </div>

                <div className="flex flex-col items-end justify-evenly ">
                  <Button
                    className="p-0  text-red-400"
                    variant={"link"}
                    onClick={handleRemoveItem}
                  >
                    <Trash2 />
                  </Button>

                  <h1 className="text-lg font-semibold">Rs. {item.price}</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
