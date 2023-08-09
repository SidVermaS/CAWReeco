import React from "react";

const useDataUtil = () => {
  const checkNullOrUndefined = React.useCallback(
    (data: unknown) => data === null || data === undefined,
    []
  );
  return { checkNullOrUndefined };
};

export default useDataUtil;
