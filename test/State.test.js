var assert = require('assert');

// Test variables
var TestConfig = require('./TestConfig');
var counterAsset = TestConfig.assets[1];

// Libs
var AllThingsTalk = require('../lib');
var State = AllThingsTalk.states.State;

test('new State(counterAsset.state) should return new instance of State', function() {
    expect(new State(counterAsset.state)).toBeInstanceOf(State);
});

test('new State(counterAsset.state) should return new State object', function () {
    var state = new State(counterAsset.state);
    expect(state).toHaveProperty('timestamp');
    expect(state).toHaveProperty('value');
});

test('new State(counterAsset.state).getTimestamp() should return timestamp', function () {
    timestamp = new State(counterAsset.state).getTimestamp();
    expect(timestamp).toBeInstanceOf(Date);
    expect(timestamp).toEqual(new Date(counterAsset.state.at));
});

test('new State(counterAsset.state).getTimestamp() should return value', function () {
    value = new State(counterAsset.state).getValue();
    expect(value).toEqual(counterAsset.state.value);
});
