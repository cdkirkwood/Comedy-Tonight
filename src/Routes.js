import React, { Component } from 'react';
import {fetchEvents} from './store';
import {connect} from 'react-redux';
import {withRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AllEvents, SingleEvent, MapView} from './Components';

class Routes extends Component {

  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={AllEvents} />
        <Route path="/events/:id" component={SingleEvent} />
        <Route path="/map-view" component={MapView}/>
      </div>
    )
  }
}

const mapState = state => {
  return {events: state.events}
}

const mapDispatch = dispatch => {
  return {
    loadInitialData () {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          dispatch(fetchEvents(latitude, longitude));
        })
      }
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired
}