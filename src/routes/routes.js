import Home from '../pages/home';
import Login from '../pages/login';

export const Routes = [
  {key: 1, path: '/', component: Home, exact: true},
  {key: 2, path: '/login', component: Login, exact: false},
];
