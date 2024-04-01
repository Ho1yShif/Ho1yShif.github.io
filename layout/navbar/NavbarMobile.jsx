import React, { useState } from "react";
import Link from "next/link";
import { NavbarMenu } from "./NavbarItems";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className='w-full h-[60px] bg-black dark:bg-black backdrop-filter backdrop-blur-lg md:hidden fixed z-10 transition-all duration-500'
    >
      <div className='px-2 max-w-[600px] m-auto flex justify-between items-center gap-4 dark:shadow-gray-800'>
        {/* Name Logo */}
        <Link href="/#home" className='text-gray-400 flex'>
          <span className='text-1vm font-bold'>Shifra Isaacs</span>
        </Link>
        {/* Hamburger Menu Button */}
        <button onClick={toggleMenu} className='text-white dark:text-white font-semibold text-1vm'>
          {showMenu ?
            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        {showMenu && (
          <div className='h-full flex gap-4'>
            {/* Navbar Links */}
            {NavbarMenu.map((navbar) => (
              <Link
                className={"text-white dark:text-white font-semibold text-1vm"}
                href={navbar.link}
                key={navbar.name}
              >
                <div className='h-full pb-1 hover:pb-0 px-1 flex items-center hover:border-b-4  border-white dark:border-white transition-all'>
                  {navbar.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;