const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.get("/api/whoami", (req, res) => {
  const lang = req.headers["accept-language"];
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const soft = req.headers["user-agent"];

  res.json({
    ipaddress: ip,
    language: lang,
    software: soft,
  });
});

module.exports = app;
