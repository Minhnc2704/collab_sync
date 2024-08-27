import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <div className="px-5">
      <nav className="w-full flex items-center justify-between py-4">
        {/* Logo and Website Name */}
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        {/* Get Started Button */}
        <div>
          <a
            href="/dashboard"
            className="relative flex h-9 w-full items-center justify-center px-4 bg-black rounded-full hover:bg-gray-800 transition duration-300 sm:w-max"
          >
            <span className="relative text-sm font-semibold text-white">
              Get Started
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
