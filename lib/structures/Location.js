/**
 * Location object.
 *
 * @param {Number} latitude The location latitude.
 * @param {Number} longitude The location longitude.
 * @param {Number} altitude The location altitude.
 */
class Location {
    constructor(latitude, longitude, altitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }

    /**
     * Get this location.
     *
     * @return {Location} Returns this location.
     */
    getLocation() {
        return this;
    }

    /**
     * Set this location.
     *
     * @param {Number} latitude The location latitude.
     * @param {Number} longitude The location longitude.
     * @param {Number} altitude The location altitude.
     */
    setLocation(latitude, longitude, altitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }
}
