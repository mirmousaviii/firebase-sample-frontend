import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {AppBar, Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {auth} from '../../utils/firebase';
import {Link, useHistory} from 'react-router-dom';

/**
 * Header of default layout
 * @return {JSX.Element}
 * @constructor
 */
function Header() {
  const history = useHistory();

  const logout = () => {
    auth.signOut().then(() => {
      history.push('/login');
    }).catch((error) => {
      alert(error.message);
    });
  };
  return (
      <AppBar position="static">
        <Toolbar>
          <Box flexGrow={1}>
            <Typography variant="h5" component="h1" color="inherit">
              Company name
            </Typography>
          </Box>
          {auth.currentUser ?
              (<Button
                  color="inherit"
                  aria-label="Logout"
                  onClick={logout}>Logout</Button>) :
              (<Button
                  color="inherit"
                  aria-label="Login"
                  component={Link}
                  to="/login">Login</Button>)
          }
        </Toolbar>
      </AppBar>
  )
      ;
}

export default Header;
