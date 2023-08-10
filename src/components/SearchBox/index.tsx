import React from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./index.module.scss";
export interface SearchBoxI {
  placeholder?: string;
  handleChange?: (text: string) => void;
  searchBoxBackgroundStyle?: string;
}
const SearchBox = (props: SearchBoxI) => {
  const [value, setValue] = React.useState<string>("");
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );
  return (
    <div
      className={`${styles.searchBoxBackground} ${
        props?.searchBoxBackgroundStyle ? props?.searchBoxBackgroundStyle : ""
      }`}
    >
      <input
        className={styles.input}
        placeholder={props?.placeholder || "Search...."}
        type="text"
        onChange={onChange}
        value={value}
      />
      <BsSearch className={styles.searchIcon} />
    </div>
  );
};

export default SearchBox;
