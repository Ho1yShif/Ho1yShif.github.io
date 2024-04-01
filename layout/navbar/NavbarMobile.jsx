import React, { useState } from "react";
import Link from "next/link";
import { NavbarMenu } from "./NavbarItems";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className='w-full h-[70px] px-8 bg-black dark:bg-black backdrop-filter backdrop-blur-lg md:hidden flex justify-between items-center gap-4 dark:shadow-gray-800 fixed z-10 transition-all duration-500'
    >
      {/* Name Logo */}
      <Link href="/#home" className='text-gray-400 flex'>
        <span className='text-2vw font-bold'>Shifra Isaacs</span>
      </Link>
      <div className='h-full flex gap-4'>
        {/* Navbar Links */}
        {NavbarMenu.map((navbar) => (
          <Link
            className={"text-white dark:text-white font-semibold text-2vw"}
            href={navbar.link}
            key={navbar.name}
          >
            <div className='h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4  border-white dark:border-white transition-all'>
              {navbar.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarMobile;