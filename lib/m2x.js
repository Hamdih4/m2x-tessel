'use strict';

var querystring = require("querystring");

var Tessel = require("./tessel");
var Client = require("./client");
var Batches = require("./batches");
var Blueprints = require("./blueprints");
var Datasources = require("./datasources");
var Feeds = require("./feeds");
var Keys = require("./keys");

var M2X = function(apiKey, apiVersion) {
    this.client = new Client(apiKey, apiVersion);

    this.batches = new Batches(this.client);
    this.blueprints = new Blueprints(this.client);
    this.datasources = new Datasources(this.client);
    this.feeds = new Feeds(this.client);
    this.keys = new Keys(this.client);
};

M2X.prototype.status = function(cb) {
    return this.client.get("/status", cb);
};

module.exports = M2X;
