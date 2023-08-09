import React from "react";
import styles from "./index.module.scss";
import OrderDetails from "./components/OrderDetails";

const Orders = () => {
  return (
    <div className={styles.ordersBackground}>
      <OrderDetails />
      <div className={`${styles.content}`}>
        {React.Children.toArray(
          Array.from({ length: 500 }).map((_, index) => (
            <div>Orders: {index}</div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
