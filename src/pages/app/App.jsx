import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
const MainPage = lazy(() => import("../main"));

import About from "./../about/index";
import Article1 from "./../article1/index";
import Blog from "./../blog/index";
import CalculatorPage from "./../calculator/index";
import { Catalog } from "./../catalog/Catalog";
import Privacy from "./../privacy/index";
import Terms from "./../terms/index";
import Video from "./../video/index";
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
              <Route exact path="/blog">
                <Blog />
              </Route>
              <Route exact path="/calculator">
                <CalculatorPage />
              </Route>
              <Route exact path="/privacy">
                <Privacy />
              </Route>
              <Route exact path="/terms">
                <Terms />
              </Route>
              <Route exact path="/article1">
                <Article1 />
              </Route>
              <Route exact path="/video">
                <Video />
              </Route>
              <Route exact path="/about">
                <About />
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
