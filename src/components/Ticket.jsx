import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';

function Ticket(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: #48648e;
          border-top: 2px solid black;
          margin: 10px auto;
          padding: 10px;
          width: 30%;
          height: 10vw;
        }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <p><em>{props.issue}</em></p>
    </div>
  );
}

// function displayTimeOpen(timeOpen) {
//   return timeOpen.from(new Moment(), true);
// }

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue:  PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired
};

export default Ticket;
