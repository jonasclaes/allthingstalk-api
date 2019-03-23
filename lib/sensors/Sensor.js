'use strict';

var states = require('../states');
var State = states.State;

/**
 * Sensor object.
 *
 * @param {Object} asset Device asset.
 * @returns {Sensor} Returns a new Sensor object.
 */
class Sensor {
	constructor(asset) {
		this.deviceId = asset.deviceId || "";
		this.thing = asset.thing || "";
		this.id = asset.id || "";
		this.name = asset.name || "";
		this.title = asset.title || "";
		this.is = asset.is || "";
		this.description = asset.description || "";
		this.createdOn = new Date(asset.createdOn) || new Date();
		this.updatedOn = new Date(asset.updatedOn) || new Date();
		this.createdBy = asset.createdBy || "";
		this.updatedBy = asset.updatedBy || "";
		this.profile = asset.profile || {};
		this.control = asset.control || {};
		this.state = new State(asset.state);
		this.style = asset.style || "";
	}

	/**
	 * Get device ID.
	 *
	 * @return {String} ID of the device.
	 */
	getDeviceId() {
		return this.deviceId;
	}

	/**
	 * Get asset thing.
	 *
	 * @return {String} Thing of the asset.
	 */
	getThing() {
		return this.thing;
	}

	/**
	 * Get asset ID.
	 *
	 * @return {String} ID of the asset.
	 */
	getId() {
		return this.id;
	}

	/**
	 * Get asset name.
	 *
	 * @return {String} Name of the asset.
	 */
	getName() {
		return this.name;
	}

	/**
	 * Get asset title.
	 *
	 * @return {String} Title of the asset.
	 */
	getTitle() {
		return this.title;
	}

	/**
	 * Get asset type.
	 *
	 * @return {String} Type of the asset.
	 */
	getType() {
		return this.is;
	}

	/**
	 * Get asset description.
	 *
	 * @return {String} Description of the asset.
	 */
	getDescription() {
		return this.description;
	}

	/**
	 * Get asset creation date.
	 *
	 * @return {Date} Creation date of the asset.
	 */
	getCreatedDate() {
		return this.createdOn;
	}

	/**
	 * Get asset update date.
	 *
	 * @return {Date} Update date of the asset.
	 */
	getUpdatedDate() {
		return this.updatedOn;
	}

	/**
	 * Get asset creator ID.
	 *
	 * @return {String} Creator ID of the asset.
	 */
	getCreatedBy() {
		return this.createdBy;
	}

	/**
	 * Get asset updater ID.
	 *
	 * @return {String} Updater ID of the asset.
	 */
	getUpdatedBy() {
		return this.updatedBy;
	}

	/**
	 * Get asset profile.
	 *
	 * @return {Object} Profile of the asset.
	 */
	getProfile() {
		return this.profile;
	}

	/**
	 * Get asset control.
	 *
	 * @return {Object} Control of the asset.
	 */
	getControl() {
		return this.control;
	}

	/**
	 * Get asset state.
	 *
	 * @return {Object} State of the asset.
	 */
	getState() {
		return this.state;
	}

	/**
	 * Get asset style.
	 *
	 * @return {String} Style of the asset.
	 */
	getStyle() {
		return this.style;
	}
}

module.exports = exports = Sensor;
