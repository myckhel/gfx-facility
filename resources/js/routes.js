import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const Dashboard = React.lazy(() => import('./views/App/Dashboard'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
];

export default routes;
