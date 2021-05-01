import React from 'react';
import Header from './header';
import {AppBar} from '@material-ui/core';

/**
 * Default layout
 * @param  {children} Children
 * @return {JSX.Element}
 */
function defaultLayout({children}) {
  return (
    <div className="app-main">
      <AppBar position="static">
        <Header />
      </AppBar>
      <div className="main-content">{children}</div>
    </div>
  );
}

export default defaultLayout;
