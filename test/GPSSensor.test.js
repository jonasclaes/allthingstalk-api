var assert = require('assert');

// Test variables
var TestConfig = require('./TestConfig');
var GPSAsset = TestConfig.assets[2];

// Libs
var AllThingsTalk = require('../lib');
var GPSSensor = AllThingsTalk.GPSSensor;

test('new GPSSensor() should return Error("Missing asset")', function() {
	expect(function() { new GPSSensor() }).toThrow(new Error("Missing asset"));
});

test('new GPSSensor(GPSAsset) should return instance of GPSSensor', function() {
	expect(new GPSSensor(GPSAsset)).toBeInstanceOf(GPSSensor);
});

describe('GPSSensor class methods', function() {
	var gpsSensor = null;

	beforeEach(function() {
		gpsSensor = new GPSSensor(GPSAsset);
	});

	afterEach(function() {
		gpsSensor = null;
	});

	test('gpsSensor.getDeviceId() should return "R8k2Bfx3EnGjqecoEfUAgUYo"', function() {
		expect(gpsSensor.getDeviceId()).toMatch("R8k2Bfx3EnGjqecoEfUAgUYo");
	});

	test('gpsSensor.getId() should return "SmypIuHe6d653azNi6330abi"', function() {
		expect(gpsSensor.getId()).toMatch("SmypIuHe6d653azNi6330abi");
	});

	test('gpsSensor.getName() should return "gps"', function() {
		expect(gpsSensor.getName()).toMatch("gps");
	});

	test('gpsSensor.getTitle() should return "Gps"', function() {
		expect(gpsSensor.getTitle()).toMatch("Gps");
	});

	test('gpsSensor.getLatestLatitude() should return 51.2192858277976', function() {
		expect(gpsSensor.getLatestLatitude()).toEqual(51.2192858277976);
	});

	test('gpsSensor.getLatestLongitude() should return 5.30745763331652', function() {
		expect(gpsSensor.getLatestLongitude()).toEqual(5.30745763331652);
	});

	test('gpsSensor.getLatestCoordinates() should return object', function() {
		expect(gpsSensor.getLatestCoordinates()).toHaveProperty('latitude');
		expect(gpsSensor.getLatestCoordinates()).toHaveProperty('longitude');
	});

});