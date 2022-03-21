import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import styles from "./NavBar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const NavBar = () => {
  return (
    <nav className={styles.menuContainer}>
      {menuItems.map((i) => (
        <ActiveLink text={i.text} key={i.text} href={i.href} />
      ))}
    </nav>
  );
};

export default NavBar;
