import React, { Component, Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../components/utils/ProtectedRoute';
import Home from '../pages/Home';
import Boards from '../pages/Boards';
import Navbar from '../components/Navbar';
class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Fragment>
            <Navbar />
            <ProtectedRoute path="/boards" component={Boards} />
          </Fragment>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRouter;
