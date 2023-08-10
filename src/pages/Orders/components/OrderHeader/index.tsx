import styles from "./index.module.scss";

import { AiOutlineRight } from "react-icons/ai";
import PrimaryText from "../../../../components/PrimaryText";
import Button from "../../../../components/Button";
import useOrderHeader from "./hook";

const OrderHeader = () => {
  const { orderId } = useOrderHeader();

  return (
    <div className={styles.orderHeaderBackground}>
      <div className={styles.breadcrumbs}>
        Orders
        <AiOutlineRight className={styles.angleRight} />
        <span className={styles.orderId}>{orderId}</span>
      </div>
      <div className={styles.orderActions}>
        <PrimaryText text={orderId} type="BOLD1" />
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

export default OrderHeader;
