import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <div className="text-xl font-bold">
        <Link href="/">Hannah Dion-Kirschner</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">CV</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;