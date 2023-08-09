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
  Bold1: styles.boldTextBackground,
  Bold2: styles.boldTextBackground,
  BoldInfo1: styles.boldTextBackground,
};
const useBoldText = () => {
  const [propsHook, setPropsHook] = React.useState<TextI>();

  return { propsHook, setPropsHook };
};

export default useBoldText;
export { textTypeStyles };
export type { TextI, TextTypeStyles };
