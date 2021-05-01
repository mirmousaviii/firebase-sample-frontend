import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Routes} from './routes';
import DefaultLayout from '../layouts/default-layout/layout';

const RoutesDumb = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* TODO: Add auth and 404 routes here */}
        <DefaultLayout>
          {Routes.map((rest) => (
            <Route {...rest} key={rest.key}/>
          ))}
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesDumb;
