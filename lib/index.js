'use strict';

var AllThingsTalk = require('./AllThingsTalk');
var Sensor = require('./Sensor');
var GPSSensor = require('./GPSSensor');
var TemperatureSensor = require('./TemperatureSensor');
var AirQualitySensor = require('./AirQualitySensor');

module.exports = exports = AllThingsTalk;

exports.default = exports;
exports.Sensor = Sensor;
exports.GPSSensor = GPSSensor;
exports.TemperatureSensor = TemperatureSensor;
exports.AirQualitySensor = AirQualitySensor;
