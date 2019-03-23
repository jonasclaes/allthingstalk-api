var assert = require('assert');

// Test variables
var TestConfig = require('./TestConfig');
var GPSAsset = TestConfig.assets[2];

// Libs
var AllThingsTalk = require('../lib');
var Sensor = AllThingsTalk.sensors.Sensor;
var GPSSensor = AllThingsTalk.sensors.GPSSensor;
var State = AllThingsTalk.states.State;
var GPSState = AllThingsTalk.states.GPSState;

test('new GPSSensor(GPSAsset) should return instance of GPSSensor as extension to Sensor', function() {
	expect(new GPSSensor(GPSAsset)).toBeInstanceOf(GPSSensor);
	expect(new GPSSensor(GPSAsset)).toBeInstanceOf(Sensor);
});

test('gpsSensor.getState() should return instance of GPSState as extension to State', function() {
	expect(new GPSSensor(GPSAsset).getState()).toBeInstanceOf(GPSState);
	expect(new GPSSensor(GPSAsset).getState()).toBeInstanceOf(State);
});
