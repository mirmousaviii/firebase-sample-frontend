import LoginPage from "../pages/login";
import HomePage from '../pages/home';

export const paths = [
  {
    key: 1,
    path: ["/"],
    component: HomePage,
    exact: true,
    private: false,
  },
  {
    key: 1,
    path: ["/login"],
    component: LoginPage,
    exact: true,
    private: false,
  },
];
