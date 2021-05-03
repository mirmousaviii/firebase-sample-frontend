import React from 'react';
import Header from './header';
import {AppBar, Box} from '@material-ui/core';

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
        <Box m={5}>
          {children}
        </Box>
      </div>
  );
}

export default DefaultLayout;
