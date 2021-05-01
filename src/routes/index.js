import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {PrivateRoute} from './private-route';
import {paths} from './paths';

const AppRoute = () => (
  <BrowserRouter>
    <Switch>
      {/* since the list doesn't change in runtime, using `index` as key is safe here. */}
      {paths.map((route, index) =>
        route.private ? (
          <PrivateRoute key={index} {...route} />
        ) : (
          <Route key={index} {...route} />
        ),
      )}
    </Switch>
  </BrowserRouter>
);

export default AppRoute;
