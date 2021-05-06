import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Box, Card, CardContent, CardHeader} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {auth, db} from '../../utils/firebase';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          db.collection('users')
            .doc(userCredential.user.uid)
            .get()
            .then((doc) => {
              let user = doc.data();
              // TODO: Use state manager
              // TODO: make and use a middleware for manage storage
              // Just for test as a get user
              localStorage.setItem('user_uid', user.uid);
              localStorage.setItem('user_name', user.name);

              history.push('/orders');
            }).catch((error) => {
            // console.log(error);
            alert(error.message);
          });

        })
        .catch((error) => {
          // TODO: Make and use notification component
          console.log(error);
          alert(error.message);
        });
  };

  return (
      <Box pt={20}>
        <Card>
          <CardHeader title="Login To Panel"/>
          <CardContent>
            <form onSubmit={submitForm}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      size="small"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button color="primary"
                          fullWidth
                          type="submit"
                          variant="contained">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
  );
};

export default LoginForm;
