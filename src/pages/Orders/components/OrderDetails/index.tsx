import React from "react";
import styles from "./index.module.scss";

import useOrderDetails, { SubOrderDetailsI } from "./hook";
import PrimaryText from "../../../../components/PrimaryText";
const SubOrderDetailsItem = (data: SubOrderDetailsI) => {
  return (
    <div className={styles.subOrderDetailsItemBackground}>
      <div>
        <PrimaryText
          type="BOLD_INFO1"
          text={data.heading}
          textStyle={styles.heading}
        />
        {typeof data?.value === "string" && (
          <PrimaryText type="BOLD2" text={data.value} />
        )}
      </div>
      <div className={styles.line}></div>
    </div>
  );
};
const OrderDetails = () => {
  const { subOrderDetails } = useOrderDetails();
  return (
    <div className={styles.orderDetailsBackground}>
      <table cellSpacing={0} className={styles.orderDetailsTable}>
        <tbody>
          <tr>
            {React.Children.toArray(
              subOrderDetails?.map(
                (subOrderDetailsItem, subOrderDetailsIndex) => (
                  <td
                    className={`${styles.orderDetailsTd} ${
                      subOrderDetailsIndex === 0
                        ? styles.orderDetailsTdLeft
                        : subOrderDetailsIndex === subOrderDetails.length - 1
                        ? styles.orderDetailsTdRight
                        : styles.orderDetailsTdCenter
                    }`}
                  >
                    <SubOrderDetailsItem {...subOrderDetailsItem} />
                  </td>
                )
              )
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
