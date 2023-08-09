import React from "react";
import styles from "./index.module.scss";

import { AiOutlineRight } from "react-icons/ai";
import PrimaryText from "../../../../components/PrimaryText";
import Button from "../../../../components/Button";
import useOrderDetails from "./hook";

const OrderDetails = () => {
  const { orderId } = useOrderDetails();

  return (
    <div className={styles.orderDetailsBackground}>
      <div className={styles.breadcrumbs}>
        Orders
        <AiOutlineRight className={styles.angleRight} />
        <span className={styles.orderId}>{orderId}</span>
      </div>
      <div className={styles.orderActions}>
        <PrimaryText text={orderId} type="Bold1" />
        <div className={styles.orderBtns}>
          <Button text="Back" type="SECONDARY" />
          <Button
            text="Approve order"
            type="PRIMARY"
            buttonStyle={styles.approveBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
