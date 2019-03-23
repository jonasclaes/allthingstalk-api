'use strict';

var Sensor = require('./Sensor');
var states = require('../states');
var GPSState = states.GPSState;

/**
 * GPS sensor object.
 *
 * @param {Object} asset Device asset.
 * @extends Sensor
 */
class GPSSensor extends Sensor {
	constructor(asset) {
		super(asset);

		this.state = new GPSState(asset.state);
	}
}

module.exports = exports = GPSSensor;
