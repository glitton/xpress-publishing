const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const errorhandler = require("errorhandler");
const morgan = require("morgan");
const PORT = process.env.PORT || 4000;

// Logging Middleware
app.use(morgan("dev"));
// Body Parser Middleware
app.use(bodyParser.json());
// CORS Middleware
app.use(cors());
// Error Handling Middleware
app.use(errorhandler());
app.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`);
});

module.exports = app;
