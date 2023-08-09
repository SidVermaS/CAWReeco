import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import NavBar from "../components/NavBar";

import styles from "./index.module.scss";

const AppRouter = () => (
  <BrowserRouter>
    <NavBar />
    <div className={styles.appRouterLayout}>
      <Routes>
        {React.Children.toArray(
          routes.map((routeItem) => (
            <Route Component={routeItem.element} path={routeItem.path} />
          ))
        )}
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
