import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold">
          CineSeek
        </Link>
        <nav className="space-x-4 text-sm">
          <Link href="/movies">Movies</Link>
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
