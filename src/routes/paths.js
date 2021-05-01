import LoginPage from "../pages/login";
import HomePage from '../pages/home';
import OrderPage from '../pages/orders';

export const paths = [
  {
    key: 1,
    path: "/",
    component: HomePage,
    exact: true,
    private: false,
  },
  {
    key: 2,
    path: "/login",
    component: LoginPage,
    exact: false,
    private: false,
  },
  {
    key: 3,
    path: "/orders",
    component: OrderPage,
    exact: false,
    private: true,
  },
];
