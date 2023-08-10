import React from "react";
interface ModalPropsI {
  acceptText?:string;
  rejectText?:string;
  handleAcceptClicked?:()=>void
  handleRejectClicked?:()=>void
  children:React.JSX.Element;
  title:string
}
interface ModalRefI {
    hide: () => void;
    toggle: () => void;
  }
export type { ModalPropsI,ModalRefI };
