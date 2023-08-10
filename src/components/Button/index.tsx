import React from "react";
import styles from "./index.module.scss";
import { ButtonType } from "../../types/constants/components.const";
interface ButtonI {
  handleClick?: () => void;
  text: string;
  type?: ButtonType;
  buttonStyle?: string;
}
type ButtonTypeStyles = {
  [key in ButtonType]: string;
};
const buttonTypeStyles: ButtonTypeStyles = {
  PRIMARY: styles.primaryBtn,
  SECONDARY: styles.secondaryBtn,
  TERTIARY: styles.tertiaryBtn,
};
const Button = (props: ButtonI) => {
  return (
    <button
      className={`${styles.buttonBackground} ${
        props?.type ? buttonTypeStyles[props.type] : ""
      } ${props?.buttonStyle ? props?.buttonStyle : ""}`}
      onClick={props?.handleClick}
    >
      {props?.text}
    </button>
  );
};

export default Button;
