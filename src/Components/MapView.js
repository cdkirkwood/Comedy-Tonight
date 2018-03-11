import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import { connect } from 'react-redux';

const google = window.google;

export class MapView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  
  onMarkerClick() {
    (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
}

onMapClicked()  {
  props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
}
}
  render() {
    const events = this.props.events;
    if (this.props.events) {
      if (this.props.events.length) {
        console.log(events[0].venue.latitude)
      }
    }
    // let coords = []
    // navigator.geolocation.getCurrentPosition(position => {
    //   coords.push(position.coords.latitude)
    //   coords.push(position.coords.longitude)
    //   //return coords;
    // })
    // console.log(coords);

    //const latitude = navigator.geolocation.getCurrentPosition()[0];
    //const longitude = navigator.geolocation.getCurrentPosition()[1];

    const style = {
      width: '75%',
      height: '75%'
    }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          style={style}
          initialCenter={{
            lat: 40.705076,
            lng: -74.009160
          }}>
          {events && 
          events.length &&
          events.map(event => {
          if (event.venue) {
          return (<Marker
            onClick={this.onMarkerClicked}
            title={event.name}
            name={event.name}
            position={{ lat: event.venue.latitude, lng: event.venue.longitude }} />
          )}
          }
        )}
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
      </InfoWindow>
        </Map>

      </div>
    )
  }
}

const mapState = state => ({ events: state.events });

export default connect(mapState)(GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
}, )(MapView))