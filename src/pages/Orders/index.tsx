import React from "react";
import styles from "./index.module.scss";
import OrderHeader from "./components/OrderHeader";
import OrderDetails from "./components/OrderDetails";
import OrderTable from "./components/OrderTable";

const Orders = () => {
  return (
    <div className={styles.ordersBackground}>
      <OrderHeader />
      <div className={`${styles.content}`}>
        <OrderDetails />        
        <OrderTable />
      </div>
      
    </div>
  );
};

export default Orders;
