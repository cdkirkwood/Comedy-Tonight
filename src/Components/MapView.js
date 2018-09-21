import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dateConverter } from '../dateConverter';
import history from '../history';

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
  
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
}

onMapClicked(props)  {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
}
  render() {
    const events = this.props.events;
    const place = this.state.selectedPlace
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
          zoom={12}
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
            key={event.id}
            onClick={this.onMarkerClick}
            title={event.name.text}
            name={event.name.text}
            date={dateConverter(event.start.local)}
            venue={event.venue ? event.venue.name: null}
            id={event.id}
            position={{ lat: event.venue.latitude, lng: event.venue.longitude }} />
          )}
          }
        )}
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <h3>{place.name}</h3>
            <h3>{place.date}</h3>
            {place.venue ?
              <h3>{`Venue: ${place.venue}`}</h3>
              : <h3 />
            }
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
