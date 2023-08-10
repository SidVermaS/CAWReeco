import React from "react";
import styles from "./index.module.scss";
import { TextType } from "../../types/constants/components.const";
interface TextI {
  text: string;
  type: TextType;
  textStyle?: string;
}
type TextTypeStyles = {
  [key in TextType]: string;
};
const textTypeStyles: TextTypeStyles = {
  BOLD1: styles.boldText1Background,
  BOLD2: styles.boldText2Background,
  BOLD3: styles.boldText3Background,
  BoldInfo1: styles.boldTextBackground,
  NORMAL_TEXT1: styles.normalText1Background,
  NORMAL_TEXT2: styles.normalText2Background,
};
const PrimaryText = (props: TextI) => {
  return (
    <div
      className={`${props?.type ? textTypeStyles[props.type] : ""} ${
        props?.textStyle
      }`}
    >
      {props?.text}
    </div>
  );
};

export default PrimaryText;
