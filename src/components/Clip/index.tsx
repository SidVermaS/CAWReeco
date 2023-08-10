import React from "react";
import styles from "./index.module.scss";
export interface ClipI {
    handleClick?:()=>void
    isSelected?:boolean;
  text: string;
  clipBackgroundStyle?:string

}
const Clip = (props: ClipI) => {
  return <div onClick={props?.handleClick} className={`${styles.clipBackground} ${props?.isSelected?styles?.isSelected:''} ${props?.clipBackgroundStyle?props?.clipBackgroundStyle:''} `}>{props.text}</div>;
};

export default Clip;
