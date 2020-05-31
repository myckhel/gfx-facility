import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const Blog = React.lazy(() => import('./views/Blog/blog'));
const BlogDetails = React.lazy(() => import('./views/Blog/blog-details'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/blog', exact: true, name: 'Blog', component: Blog },
  { path: '/blog-details', exact: true, name: 'BlogDetails', component: BlogDetails },
];

export default routes;
