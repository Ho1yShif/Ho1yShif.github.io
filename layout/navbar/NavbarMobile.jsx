import React, { useState } from "react";
import Link from "next/link";
import { NavbarMenu } from "./NavbarItems";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div
        className='w-full h-[60px] bg-black dark:bg-black backdrop-filter backdrop-blur-lg md:hidden fixed z-10 transition-all duration-500'
      >
        <div className='px-2 max-w-[600px] m-auto flex items-center gap-4 dark:shadow-gray-800'>
          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} className='text-white dark:text-white font-semibold text-1vm'>
            {showMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          {/* Name Logo */}
          <Link href="/" className='text-gray-400 flex-grow'>
            <span className='text-1vm font-bold'>Shifra Isaacs</span>
          </Link>
        </div>
      </div>
      {showMenu && (
        <div className='fixed inset-0 bg-black bg-opacity-75 z-20 flex flex-col items-center justify-center'>
          {/* Navbar Links */}
          {NavbarMenu.map((item) => (
            <Link key={item.name} href={item.link} className='text-white text-2xl my-4' onClick={closeMenu}>
              {item.name}
            </Link>
          ))}
          {/* Close Button at the bottom */}
          <button onClick={toggleMenu} className='mt-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-white">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default NavbarMobile;