import React from "react";
import { Route, Switch, RouteProps, Link } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";
import Home from "./Home";
import About from "./About";

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
    <Switch>
      <RouteWrapper
        exact={true}
        path="/"
        component={Home}
        layout={DefaultLayout}
      />
      <RouteWrapper path="/about" component={About} layout={DefaultLayout} />
    </Switch>
  );
};

export default App;
