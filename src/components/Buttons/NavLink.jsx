//Active link
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${path.startsWith(href) ? "text-primary" : "text-black"} font-medium`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
