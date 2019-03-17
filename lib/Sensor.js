'use strict';

class Sensor {
	constructor(asset) {
		if (!asset) {
			throw new Error("Missing asset");
		}

		this.deviceId = asset.deviceId;
		this.thing = asset.thing;
		this.id = asset.id;
		this.name = asset.name;
		this.title = asset.title;
		this.is = asset.is;
		this.description = asset.description;
		this.createdOn = asset.createdOn;
		this.updatedOn = asset.updatedOn;
		this.createdBy = asset.createdBy;
		this.updatedBy = asset.updatedBy;
		this.profile = asset.profile;
		this.control = asset.control;
		this.state = asset.state;
		this.style = asset.style;
	}

	getDeviceId() {
		return this.deviceId;
	}

	getThing() {
		return this.thing;
	}

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	getTitle() {
		return this.title;
	}
}

module.exports = exports = Sensor;
