import { RouteProps } from 'react-router-dom';

// const BasicLayout = React.lazy(() => import('./layout'));
// const Login = React.lazy(() => import('./page/Login'));
import BasicLayout from './layout';
import Login from './page/Login';
import NotFound from './page/404';

export interface CustomRouteProps extends RouteProps {
  redirect?: string;
  key?: string;
  route: CustomRouteProps[];
  routes: CustomRouteProps[];
}

export default [
  {
    path: '/login',
    component: Login
  }, {
    path: '/',
    component: BasicLayout,
  }, {
    path: '*',
    component: NotFound,
  }] as CustomRouteProps[]