const express = require("express");
const router = require("./routes");

const cookieParser = require("cookie-parser");

require("./database");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use(cookieParser());
app.use(express.json());

app.use(router);

app.use((req, res, next) => {
  const error = new Error("not found...");
  error.status = 404;
  next(error);
});

app.listen(process.env.PORT || 6060);
