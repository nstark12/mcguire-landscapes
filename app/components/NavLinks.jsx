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

const NavLinks = () => {
  return (
    <div className="py-2">
      {links.map((link) => {
        return (
          <Link
            key={link.title}
            href={link.href}
            className="px-12 py-2 hover:bg-primaryHov hover:rounded-lg text-xl"
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
