/**
 * State object.
 *
 * @param {Object} state State returned from the AllThingsTalk API.
 * @param {String} state.at Time that the asset reported.
 * @param {(Number|String|Object)} state.value Value at that time.
 * @returns {State} Returns a new State object.
 */
class State {
	constructor({ at, value }) {
		if (at) {
			this.timestamp = new Date(at);
		} else {
			this.timestamp = new Date();
		}

		this.value = value || 0;
	}

	/**
	 * Gets this state.
	 *
	 * @return {Object} Returns object with timestamp and value.
	 */
	getState() {
		return {
			at: this.timestamp,
			value: this.value
		}
	}

	/**
	 * Set this state object.
	 *
	 * @param {Object} state State returned from the AllThingsTalk API.
	 * @param {String} state.at Time that the asset reported.
	 * @param {(Number|String|Object)} state.value Value at that time.
	 */
	setState({ at, value }) {
		this.timestamp = new Date(state.at || null);
		this.value = state.value || 0;
	}

	/**
	 * Get the timestamp.
	 *
	 * @return {Date} The timestamp as a Date object.
	 */
	getTimestamp() {
		return this.timestamp;
	}

	/**
	 * Set the timestamp.
	 *
	 * @param {Date} timestamp The new timestamp as a Date object.
	 */
	setTimestamp(timestamp) {
		if (timestamp) {
			this.timestamp = timestamp;
		} else {
			this.timestamp = new Date();
		}
	}

	/**
	 * Get the value.
	 *
	 * @return {(Number|String|Object)} Returns the value.
	 */
	getValue() {
		return this.value;
	}

	/**
	 * Set the value.
	 *
	 * @param {(Number|String|Object)} state The new value.
	 */
	setValue(state) {
		this.value = state.value || 0;
	}
}

module.exports = exports = State;
