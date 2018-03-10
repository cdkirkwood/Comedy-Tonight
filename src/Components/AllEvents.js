import React from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';


const AllEvents = (props) => {
  const events = props.events;
  return events && events.length ?
  events.map((event, index) => {
    let description;
    event.description.text ?
    description = event.description.text.slice(0, 750)
    : event.description.text
    return(
  <Panel bsStyle="info" key={event.id}>
    <Panel.Heading>
      <Link to={`/events/${event.id}`}>
        <Panel.Title componentClass="h3">{event.name.text}</Panel.Title>
      </Link>
    </Panel.Heading>
    <Panel.Body>{description}
    </Panel.Body>
  </Panel>
  )
})
  : <h3>loading...</h3>
}

const mapState = state => ({events: state.events});

const AllEventsContainer = connect(mapState)(AllEvents)

export default AllEventsContainer;