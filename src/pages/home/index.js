import React from 'react';
import {Link} from 'react-router-dom';
import DefaultLayout from '../../layouts/default-layout';
import Typography from '@material-ui/core/Typography';
import {List, ListItem} from '@material-ui/core';

function HomePage() {
  return (
      <DefaultLayout>
        <Typography variant="h5" gutterBottom>
          You can <Link to="/login">login</Link> and use the application.
        </Typography>
        <Typography gutterBottom>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Typography>
        <Typography variant="h6">
          Pages:
        </Typography>
        <List>
          <ListItem><Link to="/">Home page</Link></ListItem>
          <ListItem><Link to="/login">Login</Link></ListItem>
          <ListItem><Link to="/orders">Orders</Link></ListItem>
          <ListItem><Link to="/orders/3bo5v0iJ4i732XwUIKR3">Order details</Link></ListItem>
        </List>
      </DefaultLayout>
  );
}

export default HomePage;
