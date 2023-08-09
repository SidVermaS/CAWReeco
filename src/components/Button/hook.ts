import React from "react";
import styles from "./index.module.scss";
import { ButtonType } from "../../types/constants/components.const";
interface ButtonI {
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
};
const useButton = () => {
  const [type, setType] = React.useState<ButtonType>("PRIMARY");
  const [propsHook, setPropsHook] = React.useState<ButtonI>();
  React.useEffect(() => {
    if (propsHook?.type) {
      setType(propsHook?.type);
    }
  }, [propsHook?.type]);

  return { buttonTypeStyles, propsHook, setPropsHook, type };
};
export default useButton;
export type { ButtonI };
