import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import AdminLayout from './admin/layouts/baseLayout';
import LogoOnlyLayout from './admin/layouts/LogoOnlyLayout';
//
import Login from './admin/pages/Login';
import NotFound from './admin/pages/Page404';
import Register from './admin/pages/Register';

import Home from './admin/pages/home';
import BlogPost from './admin/pages/blog';
import AddNewPost from './admin/pages/add-post';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/baselayout',
      element: <AdminLayout />,
      children: [
        { path: 'home', element: <Home /> },
        { path: 'blog', element: <BlogPost /> },
        { path: 'add-new-post', element: <AddNewPost /> }
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/baselayout/home" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
