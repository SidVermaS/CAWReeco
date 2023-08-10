const OrderStatuses = {
  APPROVED: "Approved",
  MISSING: "Missing",
  MISSING_URGENT: "Missing – Urgent",
};

type OrderStatus = keyof typeof OrderStatuses;
export { OrderStatuses };
export type { OrderStatus };
