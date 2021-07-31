import React from "react";
//import the Link component fom react-router
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bincast</h1>
      <p>This is the home page</p>
      {/* add a list of links*/}
      <ul>
        <li>
          <Link to="/mynotes">My Bins</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
