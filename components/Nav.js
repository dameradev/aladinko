import React from "react";

import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/">
            <a>Domov</a>
          </Link>
        </li>
        <li>
          <Link href="/storitve">
            <a>Storitve</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Kontakt</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
