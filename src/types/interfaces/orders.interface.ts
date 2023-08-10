import { OrderStatus, ProductDetailsChangeReason } from "../constants/orders.const";

interface OrdersI {
  id: number;
  name: string;
  brand: string;
  currency: string;
  price: number;
  quantity: number;
  status?: OrderStatus;
  reason?:ProductDetailsChangeReason | null
}

export type { OrdersI };
