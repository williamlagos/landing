const express = require("express");
const colors = require("colors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const ip = require("ip");
const errorhandler = require("errorhandler");
const compression = require("compression");
const mars = require("./mars");

const app = express();
let host = ip.address();
let port = process.env.PORT || "8300";
let sslPort = process.env.SSL_PORT || "443";
app.use(compression());
app.use(cors());
app.use(errorhandler());
app.use(multer({ dest: ".tmp" }).any());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("dev"));

mars.init(app);
mars.assets(app);

app.listen(port, () => {
    console.log((`♂ Mars Server: PWAs listening on http://${host}:${port}`).green.bold);
});
module.exports = app;