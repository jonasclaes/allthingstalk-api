'use strict';

var Sensor = require('./Sensor');

class GPSSensor extends Sensor {
	getLatestLatitude() {
		return this.state.value.latitude;
	}

	getLatestLongitude() {
		return this.state.value.longitude;
	}

	getLatestCoordinates() {
		return this.state.value;
	}
}

module.exports = exports = GPSSensor;