import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/images/logo.png";
import UserOptions from "./components/UserOptions";
import { NavItemsI } from "../../types/interfaces/routes.interface";
const navItems: NavItemsI[] = [
  {
    path: "/",
    text: "Store",
  },
  {
    path: "/",
    text: "Orders",
  },
  {
    path: "/",
    text: "Analytics",
  },
];
const NavBar = () => {
  return (
    <nav className={styles.navBarBackground}>
      <div className={styles.leftPart}>
        <div className={styles.logoParent}>
          <img className={styles.logo} src={logo} />
        </div>
        <ul>
          {React.Children.toArray(
            navItems.map((navItem) => (
              <Link className={styles.link} to={navItem.path}>
                {navItem.text}
              </Link>
            ))
          )}
        </ul>
      </div>
      <div className={styles.rightPart}>
        <AiOutlineShoppingCart className={styles.shoppingCart}  />
        <UserOptions />
      </div>
    </nav>
  );
};

export default NavBar;
