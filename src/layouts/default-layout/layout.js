import React from 'react';
import Header from './header';
import {AppBar} from '@material-ui/core';
import Container from '@material-ui/core/Container';

/**
 * Default layout
 * @param  {children} Children
 * @return {JSX.Element}
 */
function defaultLayout({children}) {
  return (
    <div>
      <AppBar position="static">
        <Header/>
      </AppBar>
      <Container maxWidth="xs">
        {children}
      </Container>
    </div>
  );
}

export default defaultLayout;
