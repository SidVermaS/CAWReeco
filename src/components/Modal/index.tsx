import React from "react";
import { RxCross2 } from "react-icons/rx";
import styles from "./index.module.scss";
import type {
  ModalPropsI,
  ModalRefI,
} from "../../types/interfaces/component.interface";
import Button from "../Button";
import PrimaryText from "../PrimaryText";

const Modal = React.forwardRef<ModalRefI, ModalPropsI>((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    hide: hide,
    toggle: () => {
      setShow((prev) => !prev);
    },
  }));
  const [show, setShow] = React.useState<boolean>(false);
  const hide = React.useCallback(() => {
    setShow(false);
  }, [setShow]);
  const onRejectClicked = React.useCallback(() => {
    hide();
    if (props?.handleRejectClicked) {
      props?.handleRejectClicked();
    }
  }, [hide, props]);
  const onAcceptClicked = React.useCallback(() => {hide();
    if (props?.handleAcceptClicked) {
      props?.handleAcceptClicked();
    }
  }, [hide, props]);
  return show ? (
    <div className={styles.rootBody}>
      <div className={styles.modalBackground}>
        <div className={styles.header}>
          <PrimaryText type="BOLD2" text={props.title} />
          <RxCross2 onClick={hide} className={styles.cross} />
        </div>
        <div className={styles.body}>{props.children}</div>
        <div className={styles.footer}>
          {props?.rejectText && (
            <Button
              handleClick={onRejectClicked}
              type="TERTIARY"
              text={props?.rejectText}
            />
          )}
          {props?.acceptText && (
            <Button
              handleClick={onAcceptClicked}
              type="PRIMARY"
              text={props?.acceptText}
            />
          )}
        </div>
      </div>{" "}
    </div>
  ) : (
    <></>
  );
});
export default Modal;
