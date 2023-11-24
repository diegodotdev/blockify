import { Button } from "./ui/button";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { Cpu, List } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function Nav() {
  return (
    <header className="w-full h-[12vh] grid place-items-center">
      <div className="w-[90vw] sm:w-[85vw] 2xl:w-[60vw] h-full border-b border-gray-200 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-1">
            <Cpu />
            <span className="font-semibold text-2xl">Blockify</span>
          </div>
        </Link>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.id}>
              <div className="flex items-center gap-1">
                <link.icon size="15px" />
                <span>{link.title}</span>
              </div>
            </Link>
          ))}
          <SignedIn>
            <>
              <Link href="/watchlist">
                <div className="flex items-center gap-1">
                  <List size="15px" />
                  <span>Watchlist</span>
                </div>
              </Link>
              <SignOutButton>
                <Button>Sign Out</Button>
              </SignOutButton>
            </>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}
