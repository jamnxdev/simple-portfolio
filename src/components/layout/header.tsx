import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed block h-12 border-x-2 border-dashed top-0 z-10 left-1/2 -translate-x-1/2 max-w-4xl backdrop px-2 backdrop-blur-sm w-full">
      <nav className="flex items-center justify-between h-full">
        <Link href={"/"}>/home</Link>
      </nav>
    </header>
  );
}
