"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLinks from "./NavLinks";
import NavOverlay from "./NavOverlay";
import Button from "./Button";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <header className="flex flex-row justify-between items-center py-2 px-2">
        <div className="flex">
          <Link href={"/"}>
            <Image
              src={"/assets/logo.jpg"}
              alt="McGuire Landscapes logo"
              width={150}
              height={150}
            />
          </Link>
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)}>
              <div className="bg-primary py-4">
                <Bars3Icon className="h-10 w-10 text-white bg-primaryHov border border-primaryHov rounded-lg m-6 md:hidden absolute right-0 top-1" />
              </div>
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)}>
              <XMarkIcon className="h-10 w-10 text-white bg-primaryHov border border-primaryHov rounded-lg m-6 md:hidden absolute right-0 top-1" />
            </button>
          )}
        </div>
        <div className="m-4 hidden md:flex">
          <Link href={"#"}>
            <Button>Contact</Button>
          </Link>
        </div>
      </header>

      {navbarOpen && (
        <div onClick={() => setNavbarOpen(false)}>
          <NavOverlay />
        </div>
      )}
      <nav className="bg-primary text-white md:flex md:justify-center hidden relative py-2">
        <ul className="flex justify-center">
          <NavLinks />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
