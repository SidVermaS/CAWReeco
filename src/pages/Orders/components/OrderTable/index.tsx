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
import NumberInput from "../../../../components/NumberInput";
import {
  ProductDetailsChangeReason,
  ProductDetailsChangeReasons,
} from "../../../../types/constants/orders.const";
import Clip from "../../../../components/Clip";
const OrderTable = () => {
  const {
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

    statusModalRef,
    tableHeaders,
  } = useOrderTable();

  return (
    <div className={styles.orderTableBackground}>
      <Modal
        handleAcceptClicked={handleAcceptClicked}
        handleRejectClicked={handleRejectClicked}
        acceptText="Yes"
        rejectText="No"
        title="Missing product"
        ref={statusModalRef}
      >
        <PrimaryText
          text={`Is "${selectedOrder?.name}" urgent?`}
          type="NORMAL_TEXT1"
        />
      </Modal>
      {selectedOrder && (
        <Modal
          modalBackgroundStyle={styles.editModalBackgroundStyle}
          handleAcceptClicked={handleSendClicked}
          acceptText="Send"
          rejectText="Cancel"
          subTitle={selectedOrder?.brand || ""}
          title={selectedOrder?.name || ""}
          ref={editModalRef}
        >
          <>
            <div className={styles.productParent}>
              <img src={AavocadoHass} className={styles.productImg} />
              <div className={styles.productActionsList}>
                <div className={styles.productActionsParent}>
                  <div className={styles.productActionsLabelRow}>
                    <PrimaryText
                      type="NORMAL_TEXT1"
                      text={`Price (${selectedOrder?.currency})`}
                    />
                  </div>
                  <div className={styles.productActionsRow}>
                    <NumberInput
                      handleChange={(value: number) => {
                        handleSelectedOrderInputChange("price", value);
                      }}
                      numberInputBackgroundStyle={
                        styles.priceNumberInputBackgroundStyle
                      }
                      value={selectedOrder?.price.toString()}
                    />
                  </div>
                </div>
                <div className={styles.productActionsParent}>
                  <div className={styles.productActionsLabelRow}>
                    <PrimaryText type="NORMAL_TEXT1" text="Quantity" />
                  </div>
                  <div className={styles.productActionsRow}>
                    <NumberInput
                      handleChange={(value: number) => {
                        handleSelectedOrderInputChange("quantity", value);
                      }}
                      hasBtns
                      value={selectedOrder?.quantity.toString()}
                    />
                  </div>
                </div>
                <div className={styles.productActionsParent}>
                  <div className={styles.productActionsLabelRow}>
                    <PrimaryText type="NORMAL_TEXT1" text="Total" />
                  </div>
                  <div className={styles.productActionsRow}>
                    <PrimaryText
                      type="NORMAL_TEXT1"
                      text={(
                        selectedOrder?.price * selectedOrder?.quantity
                      ).toString()}
                      textStyle={styles.total}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.reasonsParent}>
              <div className={styles.reasonsHeadings}>
                <PrimaryText text="Choose reason&nbsp;" type="BOLD3" />
                <PrimaryText text="(Optional)" type="NORMAL_TEXT1" />
              </div>
              <div className={styles.reasons}>
                {React.Children.toArray(
                  Object.keys(ProductDetailsChangeReasons).map(
                    (productDetailsChangeReasonsKey) => (
                      <Clip
                        handleClick={() =>
                          handleReasonClicked(
                            productDetailsChangeReasonsKey as ProductDetailsChangeReason
                          )
                        }
                        isSelected={
                          productDetailsChangeReasonsKey ===
                          selectedOrder?.reason
                        }
                        text={
                          ProductDetailsChangeReasons[
                            productDetailsChangeReasonsKey as ProductDetailsChangeReason
                          ]
                        }
                        clipBackgroundStyle={styles.clipBackgroundStyle}
                      />
                    )
                  )
                )}
              </div>
            </div>
          </>
        </Modal>
      )}
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
                      <div
                        onClick={() => handleEdit(ordersItem?.id)}
                        className={`${styles.edit}`}
                      >
                        Edit
                      </div>
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
