import React, { useEffect, useState } from 'react';
import { Router, Route, Switch, Redirect, useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import { createBrowserHistory } from "history";

// import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux'
import './bootstrap';
import './func/window'
// import './App.scss';
// import 'react-notifications/lib/notifications.css';
// import 'antd/dist/antd.css';
require('dotenv').config();

import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Containers
import {Routes} from './containers/DefaultLayout';

import { Spin } from 'antd';

const history = createBrowserHistory();

// const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const loading = () => <div className="animated fadeIn pt-3 text-center"><Spin size="lg" color="secondary" /></div>;

const App = () => {

  return (
    <Provider store={store}>
      <Router history={history}>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route path="/" component={Routes}/>
          </Switch>
        </React.Suspense>
      </Router>
    </Provider>
  );
}

serviceWorker.unregister();
export default ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
