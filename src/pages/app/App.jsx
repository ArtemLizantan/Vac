import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
const MainPage = lazy(() => import("../main"));

const About = lazy(() => import("./../about/index"));
const Article1 = lazy(() => import("./../article1/index"));
const Blog = lazy(() => import("./../blog/index"));
const CalculatorPage = lazy(() => import("./../calculator/index"));
const Catalog = lazy(() => import("./../catalog/Catalog"));
const Privacy = lazy(() => import("./../privacy/index"));
const Terms = lazy(() => import("./../terms/index"));
const Video = lazy(() => import("./../video/index"));
const SinglePageProduct = lazy(() => import("../singleProduct"));
import "./index.scss";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Suspense fallback={<div>Loading...</div>}>
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
              <Route exact path="/products/:idCar">
                <SinglePageProduct />
              </Route>
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
