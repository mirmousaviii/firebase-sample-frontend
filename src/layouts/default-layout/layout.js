import React from 'react';
import Header from './header';

/**
 * Default layout
 * @param  {children} Children
 * @return {JSX.Element}
 */
function defaultLayout({children}) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default defaultLayout;
