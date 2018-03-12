export const dateConverter = (date) => 
  `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0,4)}`

export const timeConverter = (date) => {
  let hour;
  let timeOfDay;
  if (+date.slice(11, 13) > 12) {
    hour = +date.slice(11, 13) - 12
    timeOfDay = 'pm';
  }
  else {
    hour = +date.slice(11, 13);
    timeOfDay = 'am';
  }
  return hour + date.slice(13, 16) + timeOfDay;
}

