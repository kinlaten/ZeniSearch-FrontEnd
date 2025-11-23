"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <div>
        <Link
          href="/"
          className={`${pathname === "/" ? "font-bold text-shadow-md" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/about" ? "font-bold text-shadow-md" : ""
          }`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
