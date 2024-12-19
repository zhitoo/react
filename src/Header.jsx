import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
      <a
        href="/"
        className="flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
      >
        AIZOOME
      </a>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <a href="#" className="hover:text-gray-500">
          Home
        </a>
        <a href="#" className="hover:text-gray-500">
          About
        </a>
        <a href="#" className="hover:text-gray-500">
          Contact
        </a>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          className="sm:hidden font-bold text-xl hover:text-gray-500"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? "Menu" : "X"}
        </button>
        {showMenu && (
          <>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
