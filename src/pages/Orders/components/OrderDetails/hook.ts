import React from "react";
import OrdersAPI from "../../../../apis/orders.api";

interface SubOrderDetailsI {
  heading: string;
  value?: string | React.JSX.Element;
}
const ordersAPI = new OrdersAPI();
const useOrderDetails = () => {
  const [subOrderDetails, setSubOrderDetails] = React.useState<
    SubOrderDetailsI[]
  >([]);
  const fetchSubOrderDetails = React.useCallback(async () => {
    try {
      const response = await ordersAPI.getSubOrderDetails();
      setSubOrderDetails(
        (response.data as SubOrderDetailsI[]).map(
          (dataItem: SubOrderDetailsI) => ({
            ...dataItem,
            value: dataItem.value !== undefined ? dataItem.value : "",
          })
        )
      );
    } catch (_error) {
      //
    }
  }, []);
  React.useEffect(() => {
    fetchSubOrderDetails();
  }, [fetchSubOrderDetails]);
  return { subOrderDetails };
};

export default useOrderDetails;
export type  {SubOrderDetailsI}