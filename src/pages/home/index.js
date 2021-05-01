import React from 'react';
import {Link} from 'react-router-dom';
import DefaultLayout from '../../layouts/default-layout';

function HomePage() {
  return (
    <DefaultLayout>
      <p>You can <Link to='/login'>login</Link> and use the application.</p>
    </DefaultLayout>
  );
}

export default HomePage;
