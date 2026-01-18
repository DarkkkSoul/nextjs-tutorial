"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles.css";

const navLinks = [
  { name: "Signin", href: "/signin" },
  { name: "Signup", href: "/signup" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <nav>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              className={isActive ? "font-bold mr-5" : "text-pink-400 mr-5"}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </>
  );
}
