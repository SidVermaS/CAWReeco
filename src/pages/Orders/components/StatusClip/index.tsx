import React from "react";
import styles from "./index.module.scss";
import {
  OrderStatuses,
  type OrderStatus,
} from "../../../../types/constants/orders.const";
export interface OrderStatusI {
  orderStatus: OrderStatus;
}
type StatusTypeStyles = {
  [key in OrderStatus]: string;
};
const statusTypeStyles: StatusTypeStyles = {
  APPROVED: styles.approved,
  MISSING: styles.missing,
  MISSING_URGENT: styles.missingUrgent,
};
const StatusClip = (props: OrderStatusI) => {
  return (
    <div className={`${styles.statusClipBackground} ${statusTypeStyles[props.orderStatus]}`}>
      {OrderStatuses[props.orderStatus]}
    </div>
  );
};

export default StatusClip;
