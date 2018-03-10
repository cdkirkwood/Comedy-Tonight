import axios from 'axios';

//Action Types
const GET_EVENTS = 'GET_EVENTS';

//Action Creators
export const getEvents = events => {
  const action = {type: GET_EVENTS, events}
  return action
}

//Thunk Creators
export const fetchEvents = (latitude, longitude) => async(dispatch) => {
  const first = await axios.get(
    `https://www.eventbriteapi.com/v3/events/search/?subcategories=4007&location.within=10mi&location.latitude=${latitude}&location.longitude=${longitude}&expand=venue&token=AWXQ6FOPFWLQBPAIORNZ`
)
  let events = first.data.events;
  const count = first.data.pagination.page_count;
  for (let i = 2; i <= count; i++) {
  const next = await axios.get(
      `https://www.eventbriteapi.com/v3/events/search/?subcategories=4007&location.within=10mi&location.latitude=${latitude}&location.longitude=${longitude}&page=${i}&token=AWXQ6FOPFWLQBPAIORNZ`
    )
  events = events.concat(next.data.events);
  }
  const reducedEvents = events.reduce((arr, event) => {
    if (arr.length) {
      if (!arr.find(elem => elem.id === event.id)) arr.push(event);
    } else {
      arr.push(event);
    }
    return arr;
  }, [])
  dispatch(getEvents(reducedEvents))
}

const eventReducer = (state = [], action) => {
  switch (action.type) {

    case GET_EVENTS:
      return action.events;
    
    default:
      return state;
  }
}
export default eventReducer;

