import React from 'react';
import Header from './header';
import {AppBar} from '@material-ui/core';

/**
 * Default layout
 * @param  {children} Children
 * @return {JSX.Element}
 */
function DefaultLayout({children}) {
  return (
    <div>
      <AppBar position="static">
        <Header/>
      </AppBar>
      {children}
    </div>
  );
}

export default DefaultLayout;
