const OrderStatuses = {
  APPROVED: "Approved",
  MISSING: "Missing",
  MISSING_URGENT: "Missing – Urgent",
};

type OrderStatus = keyof typeof OrderStatuses;


// Choose reason

// Missing product Quanity is not

// Cancel
const ProductDetailsChangeReasons={
  MISSING_PRODUCT:'Missing product',
  QUANITY_ISNT_SAME:'Quanity is not the same',
  PRICE_ISNT_SAME:'Price is not the same',
  OTHER:'Other'
}

type ProductDetailsChangeReason = keyof typeof ProductDetailsChangeReasons;

export { OrderStatuses,ProductDetailsChangeReasons };
export type { OrderStatus,ProductDetailsChangeReason };
