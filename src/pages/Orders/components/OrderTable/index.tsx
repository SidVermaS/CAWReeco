import React from "react";
import styles from "./index.module.scss";
import { BsPrinter } from "react-icons/bs";
// import { FiCheck, } from "react-icons/fi";
import { RxCheck, RxCross2 } from "react-icons/rx";
import useOrderTable from "./hook";
import SearchBox from "../../../../components/SearchBox";
import Button from "../../../../components/Button";
import { OrdersI } from "../../../../types/interfaces/orders.interface";
import AavocadoHass from "../../../../assets/images/avocado_hass.jpg";
import StatusClip from "../StatusClip";
import Modal from "../../../../components/Modal";
import PrimaryText from "../../../../components/PrimaryText";
const OrderTable = () => {
  const {handleAcceptClicked,handleRejectClicked, handleApprove,handleMissing, orders,selectedOrder, statusModalRef, tableHeaders } =
    useOrderTable();
  return (
    <div className={styles.orderTableBackground}>
      <Modal handleAcceptClicked={handleAcceptClicked} handleRejectClicked={handleRejectClicked} acceptText='Yes' rejectText="No" title="Missing product" ref={statusModalRef}>
        <PrimaryText text={`Is "${selectedOrder?.name}" urgent?`} type="NORMAL_TEXT1"/>
      </Modal>
      <div className={styles.searchActions}>
        <SearchBox searchBoxBackgroundStyle={styles.searchBoxBackgroundStyle} />
        <div className={styles.btnsParent}>
          <Button text="Add Item" type="SECONDARY" />
          <BsPrinter className={styles.printer} />
        </div>
      </div>
      <div>
        <table cellSpacing={0} className={styles.table}>
          <thead>
            <tr>
              {React.Children.toArray(
                tableHeaders.map((tableHeaderItem) => (
                  <th className={styles.th}>{tableHeaderItem.title}</th>
                ))
              )}
            </tr>
          </thead>
          <tbody>
            {React.Children.toArray(
              orders.map((ordersItem: OrdersI) => (
                <tr>
                  <td className={styles.orderImgParent}>
                    <img
                      className={styles.orderImg}
                      src={AavocadoHass}
                      alt={ordersItem.name}
                    />
                  </td>
                  <td className={styles.td}>{ordersItem.name}</td>
                  <td className={styles.td}>{ordersItem.brand}</td>
                  <td className={styles.priceQuantity}>{ordersItem.price}</td>
                  <td className={styles.priceQuantity}>
                    {ordersItem.quantity}
                  </td>
                  <td className={styles.td}>
                    {ordersItem.price * ordersItem.quantity}
                  </td>
                  <td className={styles.statusBackground}>
                    <div className={styles.statusParent}>
                      {ordersItem?.status && (
                        <StatusClip orderStatus={ordersItem.status} />
                      )}
                    </div>
                  </td>
                  <td className={styles.actionsBackground}>
                    <div className={styles.actionsParent}>
                      <RxCheck
                        onClick={() => handleApprove(ordersItem.id)}
                        className={`${styles.checkIcon} ${
                          ordersItem?.status === "APPROVED"
                            ? styles.approved
                            : ""
                        }`}
                      />
                      <RxCross2
                        className={`${styles.crossIcon} ${
                          ordersItem?.status &&
                          ["MISSING", "MISSING_URGENT"].includes(
                            ordersItem.status
                          )
                            ? styles.missing
                            : ""
                        }`}
                        onClick={() => handleMissing(ordersItem.id)}
                      />
                      <div className={`${styles.edit}`}>Edit</div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
