//Active link
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname(); //check whit path

  return (
    <Link
      href={href}
      className={`${
        path === href ? "text-primary" : "text-gray-500 hover:text-primary"
      } font-medium transition-colors duration-200`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
