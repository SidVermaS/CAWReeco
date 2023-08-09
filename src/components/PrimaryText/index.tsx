import React from "react";

import useBoldText, { TextI, textTypeStyles } from "./hook";

const PrimaryText = (props: TextI) => {
  const { propsHook, setPropsHook } = useBoldText();
  React.useEffect(() => {
    setPropsHook(props);
  }, [props, setPropsHook]);
  return (
    <div
      className={`${propsHook?.type ? textTypeStyles[propsHook.type] : ""} ${
        props?.textStyle
      }`}
    >
      {propsHook?.text}
    </div>
  );
};

export default PrimaryText;
