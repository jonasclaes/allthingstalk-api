var assert = require('assert');

// Test variables
var TestConfig = require('./TestConfig');
var gpsAsset = TestConfig.assets[2];

// Libs
var AllThingsTalk = require('../lib');
var State = AllThingsTalk.states.State;
var GPSState = AllThingsTalk.states.GPSState;

test('new GPSState(gpsAsset.state) should return new instance of GPSState as an extension to State', function() {
    expect(new GPSState(gpsAsset.state)).toBeInstanceOf(GPSState);
    expect(new GPSState(gpsAsset.state)).toBeInstanceOf(State);
});

test('new GPSState(gpsAsset.state) should return new State object', function () {
    var state = new GPSState(gpsAsset.state);
    expect(state).toHaveProperty('timestamp');
    expect(state).toHaveProperty('value');
});

test('new GPSState(gpsAsset.state).getTimestamp() should return timestamp', function () {
    timestamp = new GPSState(gpsAsset.state).getTimestamp();
    expect(timestamp).toBeInstanceOf(Date);
    expect(timestamp).toEqual(new Date(gpsAsset.state.at));
});

test('new GPSState(gpsAsset.state).getTimestamp() should return value', function () {
    value = new GPSState(gpsAsset.state).getValue();
    expect(value).toEqual(gpsAsset.state.value);
});

test('new GPSState(gpsAsset.state).getLatitude() should return value', function () {
    value = new GPSState(gpsAsset.state).getLatitude();
    expect(value).toEqual(gpsAsset.state.value.latitude);
});

test('new GPSState(gpsAsset.state).getLongitude() should return value', function () {
    value = new GPSState(gpsAsset.state).getLongitude();
    expect(value).toEqual(gpsAsset.state.value.longitude);
});

test('new GPSState(gpsAsset.state).getAltitude() should return value 0', function () {
    value = new GPSState(gpsAsset.state).getAltitude();
    expect(value).toEqual(0);
});
