import React from 'react';
import PropTypes from 'prop-types';


function Ticket(props){
  const ticketInformation =
    <div>
      <style jsx>{`
        div {
          background-color: #48648e;
          border-top: 2px solid black;
          margin: 10px auto;
          padding: 10px;
          width: 30vw;
          height: 12vw;
        }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <p><em>{props.issue}</em></p>
    </div>;
    if (props.currentRouterPath === '/admin') {
      return (
        <div onClick={() => {alert('hey, you clicked the ticket belonging to ' + props.names);}}> {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}





Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue:  PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Ticket;
