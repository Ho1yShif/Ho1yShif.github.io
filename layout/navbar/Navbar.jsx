"use client";
import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";

import MobileNavbar from "./SidebarMobile";
import { NavbarMenu } from "./NavbarItems";
import NavbarMobile from "./NavbarMobile";

import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { setThemeFun, theme } = useContext(ThemeContext);

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
        className='w-full h-[70px] px-8 bg-black dark:bg-black backdrop-filter backdrop-blur-lg hidden md:flex justify-between items-center gap-4 dark:shadow-gray-800 fixed z-10 transition-all duration-500'
        style={{ top: "0" }}
      >
        {/* Name Logo */}
        <Link href="/">
        <p className='text-gray-400 flex'>
          <span className='text-lg font-bold'>Shifra Isaacs</span>
        </p>
      </Link>
        <div className='h-full flex gap-4'>
          {/* Navbar Links */}
          {NavbarMenu.map((navbar) => (
            <Link
              className={"text-white dark:text-white font-semibold"}
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

      {/* Mobile Header */}
      <NavbarMobile
        setShowMenu={setShowMenu}
        setThemeFun={setThemeFun}
        showMenu={showMenu}
        theme={theme}
        top="0"
      />

      {/* SideMenu For Mobile Screen */}
      <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
    </Fragment>
  );
};

export default Navbar;