import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OrdersStateI } from "../../types/interfaces/store.interface";
import OrdersAPI from "../../apis/orders.api";
import { OrdersI } from "../../types/interfaces/orders.interface";
import { OrderStatus } from "../../types/constants/orders.const";
const ordersAPI = new OrdersAPI();
const initialState: OrdersStateI = {
  orders: [],
};

export const getOrders = createAsyncThunk("get/orders", async () => {
  const res = await ordersAPI.getOrders();

  return res.data;
});
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrders: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    updateStatus: (
      state,
      action: { payload: { id: number; status: OrderStatus } }
    ) => {
      const foundIndex = state.orders.findIndex(
        (ordersItem) => ordersItem.id === action.payload.id
      );
      state.orders[foundIndex] = {
        ...state.orders[foundIndex],
        status: action.payload.status,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = [...(action.payload as OrdersI[])];
    });
  },
});

export const { addOrders,updateStatus } = ordersSlice.actions;

export default ordersSlice.reducer;
