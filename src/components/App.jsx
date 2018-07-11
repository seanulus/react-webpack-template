import React from 'react';
import Admin from './Admin';
import TicketList from './TicketList';
import Header from './Header';
import NewTicketControl from './NewTicketControl';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    // let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    // Object.keys(newMasterTicketList).forEach(ticketId => {
    //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    // });
    // this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl />} />
          <Route path='/admin' render={(props)=><Admin  currentRouterPath={props.location.pathname} />} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

export default withRouter(connect(mapStateToProps)(App));
