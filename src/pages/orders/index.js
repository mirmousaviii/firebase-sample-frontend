import React from 'react';
import DefaultLayout from '../../layouts/default-layout';
import firebase from 'firebase';

function OrderPage() {

  React.useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }

    loadOrders();

  }, []);

  const loadOrders = () => {
    // firebase
    //     .auth()
        // .signInWithEmailAndPassword(email, password)
        // .then((userCredential) => {
        //   // TODO: make and use a middleware for manage storage
        //   // console.log(userCredential.user);
        //   localStorage.setItem("refresh-token", userCredential.user.refreshToken);
        //   // history.push('/orders');
        // })
        // .catch((error) => {
        //   // TODO: Make and use notification component
        //   // console.log('then', userCredential);
        //   alert(error.message);
        // });
  };

  return (
    <DefaultLayout>
      <p>Order page</p>
    </DefaultLayout>
  );
}

export default OrderPage;
