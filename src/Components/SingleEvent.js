import React from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { dateConverter, timeConverter } from '../dateConverter';

const SingleEvent = (props) => {
  const events = props.events;
  const event = events && events.length ?
    events.find(element => element.id === props.match.params.id)
    : null;
  return event ?
    <div>
      <Panel bsStyle="info">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{event.name.text}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <img src={event.logo.url} alt="thumbnail" />
          <br />
          <br />
          <a href={event.url}>Buy Tickets</a>
          <h3>{dateConverter(event.start.local)} @ {timeConverter(event.start.local)}</h3>
        </Panel.Body>
        <Panel.Body>{event.description.text}
        </Panel.Body>
      </Panel>
      {event.venue ?
        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">About The Venue</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <h3>{event.venue.name}</h3>
            <h4>{event.venue.address.address_1}</h4>
            <h4>{event.venue.address.city}</h4>
            <h4>{event.venue.address.region}</h4>
          </Panel.Body>
        </Panel>
        : <br />
      }
    </div>
    : <h3>This event was not found</h3>
}

const mapState = state => ({ events: state.events });

const SingleEventContainer = connect(mapState)(SingleEvent)

export default SingleEventContainer;


