const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.get("/api/whoami", (req, res) => {
  const lang = req.headers["accept-language"];
  const ip = req.ip.match(/[1-9]{3}.+[0-9]$/)[0];
  const soft = req.headers["user-agent"];

  res.json({
    ipaddress: ip,
    language: lang,
    software: soft,
  });
});

module.exports = app;
