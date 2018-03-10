import React from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux'; 

const SingleEvent = (props) => {
  const events = props.events;
  const event = events && events.length ?
  events.find(element => element.id === props.match.params.id)
  : null;
  console.log(event)
  return event ? 
<Panel bsStyle="info">
    <Panel.Heading>
        <Panel.Title componentClass="h3">{event.name.text}</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
    <img src={event.logo.url} alt="thumbnail" />
    </Panel.Body>
    <Panel.Body>{event.description.text}
    </Panel.Body>
  </Panel>
  : <h3>This event was not found</h3>
}

const mapState = state => ({events: state.events});

const SingleEventContainer = connect(mapState)(SingleEvent)

export default SingleEventContainer;


