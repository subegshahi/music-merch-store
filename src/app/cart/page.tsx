"use client";

import Container from "@/components/ui/container";
import Navbar from "@/components/shared/navbar";
import CartItems from "@/components/routes/cart-items";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  function handleCheckOut() {
    router.push("/checkout");
  }

  return (
    <>
      <Container className="min-h-screen">
        {/* <h1>{session?.user?.name}</h1> */}
        <div className=" mt-24">
          <h1 className="text-3xl font-semibold">Your Cart</h1>
          <div className="mt-5 space-y-5">
            <CartItems />
          </div>
        </div>

        <div className="mt-5 md:grid md:grid-cols-5">
          <div className="col-span-4" />
          <div className="col-span-1">
            <h1>Sub Total: Rs. </h1>
            <Button className="mt-5 w-full" onClick={handleCheckOut}>
              Check Out
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
