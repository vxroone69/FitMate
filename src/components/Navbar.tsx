"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button"; // Assuming this is your custom Button component

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            {/* Keeping ZapIcon as per your initial logo, assuming FitMate text is handled elsewhere */}
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
              <span className="text-xl font-bold font-mono">
                Fit<span className="text-primary">Mate</span>.in
              </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-5">
          {isSignedIn ? (
            <>
              {/* Home Link - Icon Enlarges MORE on Hover */}
              <Link
                href="/"
                className="group flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} className="transition-transform group-hover:scale-125" /> {/* CHANGED HERE */}
                <span>Home</span>
              </Link>

              {/* Generate Link - Icon Enlarges MORE on Hover */}
              <Link
                href="/generate-program"
                className="group flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} className="transition-transform group-hover:scale-125" /> {/* CHANGED HERE */}
                <span>Generate</span>
              </Link>

              {/* Profile Link - Icon Enlarges MORE on Hover */}
              <Link
                href="/profile"
                className="group flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} className="transition-transform group-hover:scale-125" /> {/* CHANGED HERE */}
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </ header>
  );
};
export default Navbar;