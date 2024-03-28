"use client";

import Link from "next/link";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "#",
  },
  {
    title: "Portfolio",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <div className="bg-primary text-white px-4 py-5">
      <header className="flex flex-row justify-between items-center">
        <div className="flex">
          <Link href={"/"}>Logo</Link>
        </div>
        <div className="flex px-4">
          {links.map((link) => {
            return (
              <Link key={link.title} href={link.href} className="px-4">
                {link.title}
              </Link>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
