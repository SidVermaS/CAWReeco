import React from "react";
import styles from "./index.module.scss";
import useDataUtil from "../../utils/data.util";
export interface NumberInputPropsI {
  handleChange?: (value: number) => void;
  hasBtns?: boolean;
  numberInputBackgroundStyle?: string;
  value?:string
}
const NumberInput = (props: NumberInputPropsI) => {
  const { checkIsNumber } = useDataUtil();
  const [value, setValue] = React.useState<string>(props?.value || '0');
  return (
    <div
      className={`${styles.numberInputBackground} ${
        props?.numberInputBackgroundStyle
          ? props?.numberInputBackgroundStyle
          : ""
      }`}
    >
      {props?.hasBtns && (
        <button
          onClick={() => {
            if (checkIsNumber(value) && Number(value) > 0) {
              const tempValue = (Number(value) - 1).toString();
              setValue(tempValue);
              if (props?.handleChange) {
                props?.handleChange(Number(tempValue));
              }
            }
          }}
          className={styles.numberBtn}
        >
          -
        </button>
      )}
      <input
        className={styles.input}
        type="number"
        onChange={(e) => {
          if (checkIsNumber(e.target.value)) {
            const tempValue =
              e.target.value?.[0] === "0"
                ? e.target.value.substring(1)
                : e.target.value;
            setValue(tempValue);
            if (props?.handleChange) {
              props?.handleChange(Number(tempValue));
            }
          } else if (e.target.value === "") {
            const tempValue = "0";
            setValue(tempValue);
            if (props?.handleChange) {
              props?.handleChange(Number(tempValue));
            }
          }
        }}
        value={value}
      />
      {props?.hasBtns && (
        <button
          onClick={() => {
            const tempValue = checkIsNumber(value)
              ? (Number(value) + 1).toString()
              : "0";
            setValue(tempValue);

            if (props?.handleChange) {
              props?.handleChange(Number(tempValue));
            }
          }}
          className={styles.numberBtn}
        >
          +
        </button>
      )}
    </div>
  );
};

export default NumberInput;
