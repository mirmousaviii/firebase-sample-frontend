import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Box, Card, CardContent, CardHeader} from '@material-ui/core';

const LoginPage = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyDf-i3-kecpDpJyG1uR-Jbf0fjXMPhO54U',
      authDomain: 'construyo-coding-challenge.firebaseapp.com',
      databaseURL: 'https://construyo-coding-challenge.firebaseio.com',
      projectId: 'construyo-coding-challenge',
      storageBucket: 'construyo-coding-challenge.appspot.com',
      messagingSenderId: '275103082078',
      appId: '1:275103082078:web:3d55c84dee230264',
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('then', userCredential);
        props.history.push('/');
      })
      .catch((error) => {
        console.log('error', error);
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

export default LoginPage;
