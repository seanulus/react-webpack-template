import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
          div {
            text-align: center;
            background-color: #8798b2;
          }
          h1 {
            color: white;
          }
          .link {
            color: white;
            text-decoration: none;
          }
      `}</style>
      <h1>Help Queue</h1>
      <Link to='/'>Home</Link> | <Link to='/newticket'>Create Ticket</Link>
    </div>
  );
}

export default Header;
