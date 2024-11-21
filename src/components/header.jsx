
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", url: "/" },
    { label: "Portfolio", url: "/portfolio" },
    { label: "Contact Me", url: "contact" },
    { label: "Blog", url: "https://medium.com/@nellg.gc" },
  ];

  return (
    <nav className="bg-sky-950 p-4 relative">
      <div className="flex items-center justify-between lg:mr-96">
      
        <div className="flex items-center w-10 rounded-xl bg-white">
          <img src={logo} alt="Logo" className="w-full h-full" />
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white mr-10 text-3xl lg:hidden"
        >
          ☰
        </button>

        <div className="hidden lg:flex gap-14 items-center text-3xl text-white">
          {links.map(({ label, url }) => (
            <Link to={url} key={url} className="hover:underline">
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-sky-950 text-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-[90%] z-50 p-6 lg:hidden`}
      >
    
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-white text-4xl absolute top-4 right-4"
        >
          ×
        </button>

        <div className="flex flex-col gap-10 mt-10 text-2xl">
          {links.map(({ label, url }) => (
            <Link
              to={url}
              key={url}
              className="hover:underline hover:text-cyan-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
