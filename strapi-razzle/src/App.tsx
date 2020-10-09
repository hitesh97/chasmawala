import React from "react";
import { Route, Switch, RouteProps, Link } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";
import Home from "./Home";
import About from "./About";
import ProductDetails from "./pages/ProductDetails";

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { theme } from "@chakra-ui/core";

import "./App.css";

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
  layout: any;
}

const RouteWrapper = (props: PrivateRouteProps) => {
  const { component: Component, layout: Layout, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Switch>
        <RouteWrapper
          exact={true}
          path="/"
          component={Home}
          layout={DefaultLayout}
        />
        <RouteWrapper
          path="/product/:id?"
          component={ProductDetails}
          layout={DefaultLayout}
        />
        <RouteWrapper path="/about" component={About} layout={DefaultLayout} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
