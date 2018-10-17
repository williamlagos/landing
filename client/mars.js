/**
 * @license MIT
 * @version 1.1.0
 * @author M.A.R.S. Labs
 * @description Mars configuration main.
 */

const express = require("express");
const path = require("path");
const staticZip = require("express-static-gzip");
const applicationDir = path.join(__dirname, "www");

const MarsServer = module.exports = {
    init: function (app) { console.log(`♂ Mars Server: Starting PWA...`.yellow.bold); },
    assets: async function (app) {
        app.use(express.static(applicationDir));
        app.use(staticZip(path.join(applicationDir, "assets"), { customCompressions: [{ encodingName: "gzip", fileExtension: "gz" }] }));
    }
}