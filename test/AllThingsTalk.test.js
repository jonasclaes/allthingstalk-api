var assert = require('assert');

jest.setTimeout(10000);

// Test variables
var TestConfig = require('./TestConfig');

// Libs
var AllThingsTalk = require('../lib');

test('getApiToken() should return empty string', function() {
    expect(AllThingsTalk.getApiToken()).toMatch("");
});

test('refreshApiToken() should return Error("Missing username")', async function() {
    await expect(AllThingsTalk.refreshApiToken()).rejects.toThrow("Missing username");
});

test('refreshApiToken() should return Error("Missing password")', async function() {
    await expect(AllThingsTalk.refreshApiToken("test")).rejects.toThrow("Missing password");
});

test('refreshApiToken() should return string', async function() {
    var token = await AllThingsTalk.refreshApiToken(TestConfig.allThingsTalkUsername, TestConfig.allThingsTalkPassword);
    expect(typeof token).toMatch("string");
});

test('getDevices() should return object (array of objects)', async function() {
    var devices = await AllThingsTalk.getDevices();
    expect(typeof devices).toMatch("object");
});

test('getDevice() should return Error("Missing deviceId")', async function() {
    await expect(AllThingsTalk.getDevice()).rejects.toThrow("Missing deviceId");
});

test('getDevice(TestConfig.devices[0].id) should return object', async function() {
    var device = await AllThingsTalk.getDevice(TestConfig.devices[0].id);
    expect(typeof device).toMatch("object");
});

test('getDeviceAssets() should return Error("Missing deviceId")', async function() {
    await expect(AllThingsTalk.getDeviceAssets()).rejects.toThrow("Missing deviceId");
});

test('getDeviceAssets(TestConfig.devices[0].id) should return object (array of objects)', async function() {
    var assets = await AllThingsTalk.getDeviceAssets(TestConfig.devices[0].id);
    expect(typeof assets).toMatch("object");
});

test('getDeviceAsset() should return Error("Missing deviceId")', async function() {
    await expect(AllThingsTalk.getDeviceAsset()).rejects.toThrow("Missing deviceId");
});

test('getDeviceAsset(TestConfig.devices[0].id) should return Error("Missing assetName")', async function() {
    await expect(AllThingsTalk.getDeviceAsset(TestConfig.devices[0].id)).rejects.toThrow("Missing assetName");
});

test('getDeviceAsset(TestConfig.devices[0].id, "gps") should return object', async function() {
    var asset = await AllThingsTalk.getDeviceAsset(TestConfig.devices[0].id, "gps");
    expect(typeof asset).toMatch("object");
});