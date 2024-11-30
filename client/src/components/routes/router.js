import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

// import DashboardLayout from '../layouts';
import  {getAuthSelector} from '../features/auth/selectors/authSelector'
import { useSelector } from 'react-redux';

// export const IndexPage = lazy(() => import('../pages/dashboard/dashboard'));
// export const BlogPage = lazy(() => import('src/pages/blog'));
// export const UserPage = lazy(() => import('src/pages/user'));
export  const IndexPage = lazy(() => import('../pages/home/home'));
export const  ChatPage = lazy(() => import('../pages/chat/chat'));
export const  ProfilePage = lazy(() => import('../pages/profile/profile'));
export const  SettingsPage = lazy(() => import('../pages/settings/settings'));
export const LoginPage = lazy(() => import('../pages/login/login'));
// export const ProductsPage = lazy(() => import('src/pages/products'));
// export const Page404 = lazy(() => import('src/pages/page-not-found'));


console.log(DashboardLayout);
console.log(IndexPage);



// ----------------------------------------------------------------------
export default function Router() {
  const auth = useSelector(getAuthSelector);
  const isAuthenticated = () => {
    if(auth.token && auth.isAuthenticated && auth.user){
      return true
    }
    return false
  }

  const ProtectedRoute = ({ children,roles }) => {
    if(!isAuthenticated()){
      return <Navigate to="/login" />
    }
  };

  const routes = useRoutes([
    {
      element: (
          <Suspense fallback={<div><p>Loading...</p></div>}  >
            <Outlet />
          </Suspense>
      ),
      children: [
        { element:<ProtectedRoute  ><IndexPage /></ProtectedRoute>, index: true },
        { element:<ProtectedRoute  ><ChatPage /></ProtectedRoute> },
        { element:<ProtectedRoute  ><ProfilePage /></ProtectedRoute> },
        { element:<ProtectedRoute  ><SettingsPage /></ProtectedRoute> },
      ],
    },
    {
      path: 'login',
      element: isAuthenticated() ? <Navigate to="/" /> : <LoginPage />,
    },

    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
     {
      path: '404',
      element: <LoginPage/>,
    },
  ]);

  return routes;

}