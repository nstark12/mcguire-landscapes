"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLinks from "./NavLinks";
import NavOverlay from "./NavOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <header className="flex flex-row justify-between items-center py-2 px-2">
        <div className="flex">
          <Link href={"/"}>Logo</Link>
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)}>
              <div className="bg-primary py-4">
                <Bars3Icon className="h-10 w-10 text-white bg-primary border border-primary rounded-lg m-6 md:hidden absolute right-0 top-1" />
              </div>
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)}>
              <XMarkIcon className="h-10 w-10 text-white bg-primary border border-primary rounded-lg m-6 md:hidden absolute right-0 top-1" />
            </button>
          )}
        </div>
        <div className="m-4 hidden md:flex">
          <Link href={"#"}>
            <button className="bg-primary rounded-lg text-white hover:bg-primaryHov cursor-pointer py-2 px-2 text-xl">
              Contact
            </button>
          </Link>
        </div>
      </header>

      {navbarOpen && (
        <div onClick={() => setNavbarOpen(false)}>
          <NavOverlay />
        </div>
      )}
      <nav className="bg-primary text-white md:block hidden relative">
        <ul className="flex justify-center">
          <NavLinks />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
