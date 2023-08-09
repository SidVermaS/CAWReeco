import React from "react";
import styles from "./index.module.scss";
import useButton, { ButtonI } from "./hook";

const Button = (props: ButtonI) => {
  const { buttonTypeStyles, propsHook, setPropsHook, type } = useButton();
  React.useEffect(() => {
    setPropsHook((prev) => ({ ...prev, ...props }));
  }, [props, setPropsHook]);
  return (
    <button
      className={`${styles.buttonBackground} ${
        type ? buttonTypeStyles[type] : ""
      } ${propsHook?.buttonStyle ? propsHook?.buttonStyle : ""}`}
    >
      {propsHook?.text}
    </button>
  );
};

export default Button;
