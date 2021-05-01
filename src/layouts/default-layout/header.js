import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

/**
 * Header of default layout
 * @return {JSX.Element}
 * @constructor
 */
function Header() {
  return (
    <Toolbar>
      <Typography variant="h6">Company Name</Typography>
    </Toolbar>
  );
}

export default Header;
