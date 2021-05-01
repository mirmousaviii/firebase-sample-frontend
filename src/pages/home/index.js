import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
      <p>Home - <Link to='/login'>login</Link></p>
    </>
  );
}

export default Home;
