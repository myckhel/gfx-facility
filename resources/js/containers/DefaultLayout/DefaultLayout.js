import React, { Component, Suspense, useState, useEffect } from 'react';
import * as router from 'react-router-dom';
import { Spin } from 'antd';

// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

import { Route, Switch, Redirect, useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setInitUrl, logoutUser} from "../../redux/actions";
import {selectAuthUser} from "../../redux/selectors";
import {NotificationContainer} from 'react-notifications';
import Http from '../../func/Http';
import {Loading} from '../../components/Base/Anim'

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

// Pages
const Login = React.lazy(() => import('../../views/Pages/Login'));
const Register = React.lazy(() => import('../../views/Pages/Register'));
const Page404 = React.lazy(() => import('../../views/Pages/Page404'));
const Page500 = React.lazy(() => import('../../views/Pages/Page500'));

const RestrictedRoute = ({component: Component, location, token, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      token
      ? <Component {...props} />
      : <Redirect
        to={{
          pathname: '/login',
          state: {from: location}
        }}
    />}
  />
)

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-3 text-center"><Spin size="xl" color="secondary" /></div>;

  signOut(e) {
    e.preventDefault()
    logoutUser()
    // this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">

        <div className="app-body">

          <main className="main">
            <NotificationContainer/>
            <Suspense fallback={Loading({})}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  ) : (null);
                })}
                <Redirect from="/" to="/404" />
              </Switch>
            </Suspense>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={Loading({})}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export const Routes = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({})
  const {token, initURL} = useSelector(({auth}) => auth);
  const authUser = useSelector(selectAuthUser)

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  // console.log({authUser, token, initURL, location, history});

  useEffect(() => {
    Http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, [token])

  useEffect(() => {
    initURL === '' && dispatch(setInitUrl(location.pathname))
  }, [initURL, location.pathname])

  useEffect(() => {
    if (location.pathname === '/') {
      if (token === null) {
        history.push('/login');
      } else if (initURL === '' || initURL === '/' || initURL === '/login') {
        history.push('/dashboard');
      } else {
        // history.push(initURL);
      }
    } else if (['/register', '/login'].includes(location.pathname)) {
      if (token) {
        history.push('/dashboard');
      } else {
        // history.push(initURL);
      }
    }
  }, [token, initURL, location, history]);

  return (
    <Switch>
      <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
      <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
      <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
      <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
      <RestrictedRoute name="Home" path={`${match.url}`} token={token} location={location}
                       component={DefaultLayout} />
    </Switch>
  )
}

export default DefaultLayout;
