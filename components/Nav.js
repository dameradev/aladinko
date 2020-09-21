import React from "react";

import Link from "next/link";

const Nav = (props) => {
  return (
    <nav className={`nav ${props.className}`}>
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
      <div className="call">
        Pokličite <br />
        <a href="tel:+38664163381">064 16 33 81</a>
      </div>
    </nav>
  );
};

export default Nav;
