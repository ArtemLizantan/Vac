import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
const MainPage = lazy(() => import("../main"));

import { Catalog } from "./../catalog/Catalog";
import "./index.scss";

const App = () => {
  return (
    <>
      <Suspense>
        <div className="wrapper">
          <Header />
          <main className="main">
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route exact path="/catalog">
                <Catalog />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default App;
