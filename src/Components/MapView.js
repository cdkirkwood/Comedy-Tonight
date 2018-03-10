import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import ReactMapGL from 'react-map-gl';

class MapView extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

const mapState = state => ({events: state.events});

const MapViewContainer = connect(mapState)(MapView)

export default MapViewContainer;

