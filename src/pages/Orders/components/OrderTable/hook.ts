import React from "react";
import {
  getOrders,
  updateStatus,
} from "../../../../store/reducer/orders.reducer";
import { RootState, useAppDispatch } from "../../../../store";
import { TableHeaderI } from "../../../../types/interfaces/table.interface";
import { useSelector } from "react-redux";
import { ModalRefI } from "../../../../types/interfaces/component.interface";
import { OrdersI } from "../../../../types/interfaces/orders.interface";

const tableHeaders: TableHeaderI[] = [
  {
    id: "url",
    title: "",
  },
  {
    id: "name",
    title: "Product name",
  },
  {
    id: "brand",
    title: "Brand",
  },
  {
    id: "price",
    title: "Price",
  },
  {
    id: "quantity",
    title: "Quantity",
  },
  {
    id: "total",
    title: "Total",
  },
  {
    id: "status",
    title: "Status",
  },
  {
    id: "status_actions",
    title: "",
  },
];
const useOrderTable = () => {
  const { orders } = useSelector((state: RootState) => state.ordersReducer);
  const statusModalRef = React.createRef<ModalRefI>();
  const dispatch = useAppDispatch();
  const [selectedOrder, setSelectedOrder] = React.useState<OrdersI>();
  React.useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  const handleApprove = React.useCallback(
    (id: number) => {
      dispatch(updateStatus({ id, status: "APPROVED" }));
    },
    [dispatch]
  );
  const handleMissing = React.useCallback(
    (id: number) => {
      setSelectedOrder(
        orders.find((ordersItem: OrdersI) => ordersItem.id === id)
      );
      statusModalRef.current?.toggle();
    },
    [orders, statusModalRef]
  );
  const handleAcceptClicked = React.useCallback(() => {
    if (selectedOrder?.id) {
      dispatch(updateStatus({ id: selectedOrder?.id, status: "MISSING_URGENT" }));
    }
  }, [dispatch, selectedOrder?.id]);
  const handleRejectClicked = React.useCallback(() => {
    if (selectedOrder?.id) {
      dispatch(updateStatus({ id: selectedOrder?.id, status: "MISSING" }));
    }
  }, [dispatch, selectedOrder?.id]);
  return {
    handleAcceptClicked,
    handleRejectClicked,
    handleApprove,
    handleMissing,
    orders,
    selectedOrder,
    statusModalRef,
    tableHeaders,
  };
};

export default useOrderTable;
