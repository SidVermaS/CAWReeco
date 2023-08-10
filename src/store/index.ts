import { AnyAction, Dispatch, Store, configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from "redux-thunk";
import reducer from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { useDispatch } from "react-redux";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store: Store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

// type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type State=any
type AppDispatch = ThunkDispatch<State, null | undefined, AnyAction> &
  Dispatch<AnyAction>;

type RootState = ReturnType<typeof store.getState>;
const useAppDispatch: () => AppDispatch = useDispatch;

export { persistor, store, useAppDispatch };
export type { AppDispatch, RootState };
