import React from "react";
import {
  getOrders,
  updateOrder,
  updateStatus,
} from "../../../../store/reducer/orders.reducer";
import { RootState, useAppDispatch } from "../../../../store";
import { TableHeaderI } from "../../../../types/interfaces/table.interface";
import { useSelector } from "react-redux";
import { ModalRefI } from "../../../../types/interfaces/component.interface";
import { OrdersI } from "../../../../types/interfaces/orders.interface";
import { ProductDetailsChangeReason } from "../../../../types/constants/orders.const";

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
  const editModalRef = React.createRef<ModalRefI>();
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
      dispatch(
        updateStatus({ id: selectedOrder?.id, status: "MISSING_URGENT" })
      );
    }
  }, [dispatch, selectedOrder?.id]);
  const handleRejectClicked = React.useCallback(() => {
    if (selectedOrder?.id) {
      dispatch(updateStatus({ id: selectedOrder?.id, status: "MISSING" }));
    }
  }, [dispatch, selectedOrder?.id]);
  const handleEdit = React.useCallback(
    (id: number) => {
      setSelectedOrder({
        ...orders.find((ordersItem: OrdersI) => ordersItem.id === id),
      });
      editModalRef.current?.toggle();
    },
    [orders, editModalRef]
  );
  const handleSelectedOrderInputChange = React.useCallback(
    (key: string, value: number) => {
      setSelectedOrder({ ...selectedOrder, [key]: value } as OrdersI);
    },
    [selectedOrder]
  );
  const handleReasonClicked = React.useCallback(
    (productDetailsChangeReasonsKey: ProductDetailsChangeReason) => {
      setSelectedOrder({
        ...selectedOrder,
        reason:
          selectedOrder?.reason === productDetailsChangeReasonsKey
            ? null
            : productDetailsChangeReasonsKey,
      } as OrdersI);
    },
    [selectedOrder]
  );
  const handleSendClicked = React.useCallback(() => {
    if(selectedOrder){
    dispatch(updateOrder({order:selectedOrder}))}
  }, [dispatch, selectedOrder]);
  return {
    editModalRef,
    handleAcceptClicked,
    handleEdit,
    handleRejectClicked,
    handleApprove,
    handleMissing,
    handleReasonClicked,
    handleSelectedOrderInputChange,
    handleSendClicked,
    orders,
    selectedOrder,
    setSelectedOrder,
    statusModalRef,
    tableHeaders,
  };
};

export default useOrderTable;


