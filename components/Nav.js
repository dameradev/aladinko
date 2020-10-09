import React from "react";

import Link from "next/link";

const scrollToElement = (id, handleDrawerClose) => {
  const element = document.getElementById(id);
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - 100,
  });
  handleDrawerClose(true);
  console.log(handleDrawerClose);
};
const Nav = (props) => {
  console.log(props);
  return (
    <nav className={`nav ${props.className}`}>
      <ul>
        <li>
          <Link href="/">
            <a onClick={() => props.handleDrawerClose(true)}>Domov</a>
          </Link>
        </li>
        <li>
          {/* <Link href="/storitve"> */}
          <a
            onClick={() => scrollToElement("services", props.handleDrawerClose)}
          >
            Storitve
          </a>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link href="/storitve"> */}
          <a
            onClick={() =>
              scrollToElement("price-list", props.handleDrawerClose)
            }
          >
            Cenik
          </a>
          {/* </Link> */}
        </li>
        {/* <li>
          <Link href="/kontakt">
            <a>Kontakt</a>
          </Link>
        </li> */}
      </ul>
      <div className="call">
        Pokličite <br />
        <a href="tel:+38664163381">064 16 33 81</a>
      </div>
    </nav>
  );
};

export default Nav;
