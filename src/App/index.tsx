import { Provider } from "react-redux";
import AppRouter from "../AppRouter";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return <Provider store={store}>
    <PersistGate persistor={persistor}>{() => <AppRouter />}</PersistGate>
  </Provider>
};

export default App;
