var assert = require('assert');

// Test variables
var TestConfig = require('./TestConfig');
var counterAsset = TestConfig.assets[1];

// Libs
var AllThingsTalk = require('../lib');
var Sensor = AllThingsTalk.sensors.Sensor;
var State = AllThingsTalk.states.State;

test('new Sensor(counterAsset) should return instance of Sensor', function() {
	expect(new Sensor(counterAsset)).toBeInstanceOf(Sensor);
});

test('new Sensor(counterAsset) should return new Sensor object', function() {
	var sensor = new Sensor(counterAsset);
	expect(sensor).toHaveProperty('deviceId');
	expect(sensor).toHaveProperty('thing');
	expect(sensor).toHaveProperty('id');
	expect(sensor).toHaveProperty('name');
	expect(sensor).toHaveProperty('title');
	expect(sensor).toHaveProperty('is');
	expect(sensor).toHaveProperty('description');
	expect(sensor).toHaveProperty('createdOn');
	expect(sensor.createdOn).toBeInstanceOf(Date);
	expect(sensor).toHaveProperty('updatedOn');
	expect(sensor.updatedOn).toBeInstanceOf(Date);
	expect(sensor).toHaveProperty('createdBy');
	expect(sensor).toHaveProperty('updatedBy');
	expect(sensor).toHaveProperty('profile');
	expect(sensor).toHaveProperty('control');
	expect(sensor).toHaveProperty('state');
	expect(sensor.state).toBeInstanceOf(State);
	expect(sensor).toHaveProperty('style');
});

test('new Sensor(counterAsset).getTitle() should return counterAsset.title', function() {
	expect(new Sensor(counterAsset).getTitle()).toEqual(counterAsset.title);
});

test('new Sensor(counterAsset).getName() should return counterAsset.name', function() {
	expect(new Sensor(counterAsset).getName()).toEqual(counterAsset.name);
});

test('new Sensor(counterAsset).getCreatedDate() should return counterAsset.createdOn', function() {
	expect(new Sensor(counterAsset).getCreatedDate()).toBeInstanceOf(Date);
	expect(new Sensor(counterAsset).getCreatedDate()).toEqual(new Date(counterAsset.createdOn));
});

test('new Sensor(counterAsset).getUpdatedDate() should return counterAsset.updatedOn', function() {
	expect(new Sensor(counterAsset).getUpdatedDate()).toBeInstanceOf(Date);
	expect(new Sensor(counterAsset).getUpdatedDate()).toEqual(new Date(counterAsset.updatedOn));
});
