'use strict';

var fetch = require('node-fetch');

// AllThingsTalk API url
var allThingsTalkApiUrl = "https://api.allthingstalk.io";

// Static vars
var apiToken = "";

class AllThingsTalk {
    /**
     * Get a new/refresh API token from the AllThingsTalk API.
     *
     * @param {String} username The username to login with to the API.
     * @param {String} password The password to login with to the API.
     * @returns {Promise<String>} Promise object returns the API token.
     */
    static async refreshApiToken(username, password) {
        if (!username) {
            throw new Error("Missing username");
        }

        if (!password) {
            throw new Error("Missing password");
        }

        const postBody = `grant_type=password&username=${username}&password=${password}&client_id=maker`;

        // Do a POST to the /login route of the platform API.
        const response = await fetch(allThingsTalkApiUrl + '/login', {
            method: "POST",
            body: postBody,
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        });

        // Get the JSON from the response.
        const responseJSON = await response.json();

        // Check if there is an error.
        if (responseJSON['error']) {
            throw new Error(responseJSON['error_description']);
        }

        // Set the API token.
        apiToken = responseJSON['access_token'];

        return apiToken;
    }

    /**
     * Get currently set API token.
     *
     * @returns {String} Returns API token.
     */
    static getApiToken() {
        return apiToken;
    }

    /**
     * Set API token.
     *
     * @param {String} token API token.
     * @returns {String} Returns API token.
     */
    static setApiToken(token) {
        apiToken = token;
        return apiToken;
    }

    /**
     * Retrieve all the devices linked to the user's account.
     *
     * @returns {Promise<Array>} Promise object returns the user's devices.
     */
    static async getDevices() {
        // Check if the API token is set.
        if (!apiToken) {
            throw new Error("API token is empty");
        }

        // Do a GET to the /devices route of the platform API.
        const response = await fetch(allThingsTalkApiUrl + '/devices', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiToken
            }
        });

        // Get the JSON from the response.
        const responseJSON = await response.json();

        // Check if there is an error.
        if (responseJSON['error']) {
            throw new Error(responseJSON['error_description']);
        }

        return responseJSON;
    }

    /**
     * Retrieve device by deviceId linked to the user's account.
     *
     * @param {String} deviceId The id of the device.
     * @returns {Promise<Object>} Promise object returns the device.
     */
    static async getDevice(deviceId) {
        // Check if API token is set.
        if (!apiToken) {
            throw new Error("API token is empty");
        }

        // Check if deviceId is set.
        if (!deviceId) {
            throw new Error("Missing deviceId");
        }

        // Do a GET to the /device/{{deviceId}} route of the platform API.
        const response = await fetch(allThingsTalkApiUrl + '/device/' + deviceId, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiToken
            }
        });

        // Get the JSON from the response.
        const responseJSON = await response.json();

        // Check if there is an error.
        if (responseJSON['error']) {
            throw new Error(responseJSON['error_description']);
        }

        return responseJSON;
    }

    /**
     * Get all assets for a specific device.
     *
     * @param {String} deviceId The id of the device.
     * @returns {Promise<Array>} Promise object returns the assets of the device.
     */
    static async getDeviceAssets(deviceId) {
        // Check if the API token is set.
        if (!apiToken) {
            throw new Error("API token is empty");
        }

        // Check if deviceId is set.
        if (!deviceId) {
            throw new Error("Missing deviceId");
        }

        // Do a GET to the /device/{{deviceId}}/assets route of the platform API.
        const response = await fetch(allThingsTalkApiUrl + '/device/' + deviceId + '/assets', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiToken
            }
        });

        // Get the JSON from the response.
        const responseJSON = await response.json();

        // Check if there is an error.
        if (responseJSON['error']) {
            throw new Error(responseJSON['error_description']);
        }

        return responseJSON;
    }

    /**
     * Get a device asset by name and device id.
     *
     * @param {String} deviceId The id of the device where the asset is connected to.
     * @param {String} assetName The name of the asset.
     * @returns {Promise<Object>} Promise object returns the asset of the device.
     */
    static async getDeviceAsset(deviceId, assetName) {
        // Check if the API token is set.
        if (!apiToken) {
            throw new Error("API token is empty");
        }

        // Check if deviceId is set.
        if (!deviceId) {
            throw new Error("Missing deviceId");
        }

        // Check if assetName is set.
        if (!assetName) {
            throw new Error("Missing assetName");
        }

        // Do a GET to the /device/{{deviceId}}/asset/{{assetName}} route of the platform API.
        const response = await fetch(allThingsTalkApiUrl + '/device/' + deviceId + '/asset/' + assetName, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiToken
            }
        });

        // Get the JSON from the response.
        const responseJSON = await response.json();

        // Check if there is an error.
        if (responseJSON['error']) {
            throw new Error(responseJSON['error_description']);
        }

        return responseJSON;
    }
}

module.exports = exports = AllThingsTalk;
