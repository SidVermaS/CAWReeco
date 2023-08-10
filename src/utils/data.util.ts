import React from "react";

const useDataUtil = () => {
  const checkNullOrUndefined = React.useCallback(
    (data: unknown) => data === null || data === undefined,
    []
  );
  const checkIsNumber=React.useCallback((value?: string | number): boolean=>
      !([null,undefined,''].includes(value?.toString()) && 
             !isNaN(Number(value?.toString()))),[])
  
  return { checkIsNumber,checkNullOrUndefined };
};

export default useDataUtil;
