'use strict';

var State = require('./State');
var Location = require('../structures').Location;

/**
 * GPS state object.
 *
 * @param {Object} GPSState The GPS state.
 * @param {Object} GPSState.value The GPS state value.
 * @param {Number} GPSState.value.latitude The GPS state latitude.
 * @param {Number} GPSState.value.longitude The GPS state longitude.
 * @param {Number} GPSState.value.altitude The GPS state altitude.
 * @extends State
 * @returns {GPSState} Returns a new GPSState object.
 */
class GPSState extends State {
	constructor(GPSState) {
		super(GPSState);

		this.latitude = GPSState.value.latitude || 0;
		this.longitude = GPSState.value.longitude || 0;
		this.altitude = GPSState.value.altitude || 0;
	}

	/**
	 * Get the latitude.
	 *
	 * @return {Number} The GPS latitude.
	 */
	getLatitude() {
		return this.latitude;
	}

	/**
	 * Set the latitude.
	 *
	 * @param {Number} latitude The GPS latitude.
	 */
	setLatitude(latitude) {
		this.latitude = latitude;
	}

	/**
	 * Get the longitude.
	 *
	 * @return {Number} The GPS longitude.
	 */
	getLongitude() {
		return this.longitude;
	}

	/**
	 * Set the longitude.
	 *
	 * @param {Number} longitude The GPS longitude.
	 */
	setLongitude(longitude) {
		this.longitude = longitude;
	}

	/**
	 * Get the altitude.
	 *
	 * @return {Number} The GPS altitude.
	 */
	getAltitude() {
		return this.altitude;
	}

	/**
	 * Set the altitude.
	 *
	 * @param {Number} altitude The GPS altitude.
	 */
	setAltitude(altitude) {
		this.altitude = altitude;
	}

	/**
	 * Get the location.
	 *
	 * @return {Location} The GPS location.
	 */
	getLocation() {
		return new Location(this.latitude, this.longitude, this.altitude);
	}

	/**
	 * Set the location.
	 *
	 * @param {Number} latitude The location latitude.
	 * @param {Number} longitude The location longitude.
	 * @param {Number} altitude The location altitude.
	 */
	setLocation(latitude, longitude, altitude) {
		this.latitude = latitude || 0;
		this.longitude = longitude || 0;
		this.altitude = altitude || 0;
	}
}

module.exports = exports = GPSState;
