const express = require('express');

const app = express();
// including cors
const cors = require('cors');
// including body parser
const parse = require('body-parser');
const logger = require('../../logger/index');

// including cors {you can change it later}

app.use(
  cors({
    origin: '',
  }),
);
// including routes export

// adding middleware for the custom routes

// adding middleware
app.use(parse.json());
app.use(express.json());
logger.warn('warning new one');
logger.info('info warn');

// export the module

module.exports = app;
