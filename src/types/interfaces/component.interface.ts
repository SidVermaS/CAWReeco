import React from "react";
interface ModalPropsI {
  modalBackgroundStyle?:string;
  acceptText?:string;
  rejectText?:string;
  handleAcceptClicked?:()=>void
  handleRejectClicked?:()=>void
  children:React.JSX.Element;
  title:string;
  subTitle?:string;
}
interface ModalRefI {
    hide: () => void;
    toggle: () => void;
  }
export type { ModalPropsI,ModalRefI };
