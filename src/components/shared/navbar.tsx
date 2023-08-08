"use client";

import Container from "../ui/container";
import Link from "next/link";
import Image from "next/image";
import eyeCrownLogo from "public/logos/eye-crown.png";
import CD from "public/images/cd.jpg";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import { ShoppingCart, Menu } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Navbar() {
  const { items } = useCart();
  const { toast } = useToast();
  const session = false;
  const router = useRouter();

  return (
    <header className="fixed left-0 top-0 w-full border-b border-white/10 backdrop-blur-2xl">
      <Container>
        <nav className="flex h-14 items-center justify-between">
          <Link
            className="rounded-xl p-2 ring-white/20 hover:ring-2 md:hidden"
            href=""
          >
            <Menu size={20} />
          </Link>

          <Link
            className="hover:text-wh hidden bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-xl font-semibold text-transparent hover:text-white md:block"
            href="/"
          >
            <span className="underline-offset-4 ">eye-crown</span>.
          </Link>

          <Link href="/">
            <Image src={eyeCrownLogo} width={25} height={25} alt="" />
          </Link>

          {/* <div className="hidden space-x-10 rounded-full border bg-white/5 px-6 py-3 text-sm backdrop-blur-lg md:block">
            <Link className="transition hover:text-white/50" href="">
              Home
            </Link>
            <Link className="transition hover:text-white/50" href="">
              Music
            </Link>
            <Link className="transition hover:text-white/50" href="">
              Merch
            </Link>
            <Link className="transition hover:text-white/50" href="">
              Beats
            </Link>
          </div> */}

          <Link
            className="flex items-center gap-2 rounded-xl p-2 ring-white/20 hover:text-violet-400"
            href="/cart"
          >
            <span>{items.length}</span>
            <ShoppingCart size={20} />
          </Link>

          {/* {session ? (
            <Button>Sign Out</Button>
          ) : (
            <Dialog>
              <DialogTrigger className="inline-block h-10 rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium transition hover:bg-violet-500/70 focus:outline-none focus:ring-2 focus:ring-purple-300">
                Sign in
              </DialogTrigger>

              <DialogContent className="max-w-sm">
                <Image
                  className="mt-3 aspect-square rounded-2xl object-cover object-bottom "
                  src={CD}
                  placeholder="blur"
                  alt="image of music cd"
                />

                <DialogHeader className="mt-5">
                  <DialogTitle className="text-center text-3xl">
                    Welcome
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Click the button below to sign in
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-2 flex flex-col gap-5">
                  <Button
                    className="w-full"
                    variant={"secondary"}
                    type="submit"
                  >
                    <div className="flex items-center gap-2">
                      <img className="h-6 w-6" src="/logos/google.svg" alt="" />
                      <span>Continue with Google</span>
                    </div>
                  </Button>
                </div>

                <DialogFooter>
                  <DialogDescription className="mb-3 text-center">
                    By signing in you agree to our{" "}
                    <span className="underline">
                      <Link href="">Terms of Service</Link>
                    </span>{" "}
                    and{" "}
                    <span className="underline">
                      <Link href="">Privacy Policy</Link>
                    </span>
                  </DialogDescription>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )} */}
        </nav>
      </Container>
    </header>
  );
}
