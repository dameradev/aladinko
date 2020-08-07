import React from "react";

import Link from "next/Link";
import { useFetchUser } from "../utils/user";

const Nav = () => {
  const { user, loading } = useFetchUser();
  console.log(user);
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
