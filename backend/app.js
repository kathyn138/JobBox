/** Express app for jobly. */


const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

// add logging system

const morgan = require("morgan");
app.use(morgan("tiny"));


const usersRoutes = require("./routes/users");
const companiesRoutes = require("./routes/companies");
const jobsRoutes = require("./routes/jobs");
const authRoutes = require("./routes/auth");
const wakeRoutes = require("./routes/wake");

app.use("/companies", companiesRoutes);
app.use("/jobs", jobsRoutes);
app.use("/users", usersRoutes);
app.use("/", authRoutes);
app.use("/ping", wakeRoutes);
console.log('in app')

/** 404 handler */

app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  if (err.stack) console.log(err.stack);

  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

module.exports = app;
