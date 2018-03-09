const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const Eventbrite = require('eventbrite');
const eb_client = Eventbrite({
  'app_key': "ITATE5HGD4DYT4IB6MJQIB67ZALROSPVXVI64JFKECOXRJ3VVV",
  'user_key': "AWXQ6FOPFWLQBPAIORNZ"
});

