import React from "react";

function Header() {
  return (
    <header className="bg-red-700 text-white shadow-md">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-wide">
          This is just header nothing more
        </h1>

        <nav className="flex gap-6 text-sm font-medium">

          <span className="cursor-pointer hover:text-yellow-300 transition">
            Home
          </span>

          <span className="cursor-pointer hover:text-yellow-300 transition">
            About
          </span>

          <span className="cursor-pointer hover:text-yellow-300 transition">
            Contact
          </span>

        </nav>

      </div>

    </header>
  );
}

export default Header;
