import React from "react";
import styles from "./index.module.scss";
import { FaAngleDown } from "react-icons/fa";
const UserOptions = () => {
  return (
    <div className={styles.userOptionsBackground}>
      Hello, James
      <FaAngleDown className={styles.dropdown} />
    </div>
  );
};

export default UserOptions;
