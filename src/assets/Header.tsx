"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-black z-20 relative">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
        <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        Altiora
      </Link>
      <nav className="flex gap-6 text-sm font-medium text-gray-300">
        <Link href="/about">About Us</Link>
        <Link href="/developers">Services</Link>
        <Link href="/blog">Industries</Link>
        <Link href="/contact">Blog</Link>
        <Link href="/about">Case Studies</Link>
        <Link href="/contact">Contact Us</Link>
        
      </nav>
    </header>
  );
};

export default Header;
