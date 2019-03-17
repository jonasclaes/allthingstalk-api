'use strict';

var fetch = require('node-fetch');

// AllThingsTalk API url
var allThingsTalkApiUrl = "https://api.allthingstalk.io";

// Static vars
var apiToken = "";

class AllThingsTalk {
    /**
     * Get a new/refresh API token from the AllThingsTalk API.
     * We're using 'maker' as client_id because the platform currently doesn't support custom client id's.
     * @param username The username to login with
     * @param password The password to login with
     * @returns {Promise<*>}
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
     * Get API token
     * @returns {string}
     */
    static getApiToken() {
        return apiToken;
    }

    /**
     * Set API token
     * @param token API token
     * @returns {*|string}
     */
    static setApiToken(token) {
        apiToken = token;
        return apiToken;
    }

    /**
     * Retrieve all the devices linked to the user's account.
     * @returns {Promise<*>}
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
     * @returns {Promise<*>}
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
     * @param deviceId The id of the device.
     * @returns {Promise<*>}
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
     * @param deviceId The id of the device where the asset is connected to.
     * @param assetName The id of the asset.
     * @returns {Promise<*>}
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
