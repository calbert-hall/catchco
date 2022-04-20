module.exports = {
    testConcurrency: 5,
    apiKey: 'APPLITOOLS_API_KEY',
    //
    browser: [
        // Add browsers with different viewports
        {width: 1600, height: 1200, name: 'chrome'},
        {width: 1800, height: 1200, name: 'safari'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'Pixel 2', screenOrientation: 'landscape'},
        {iosDeviceInfo: {
            deviceName: 'iPhone XR',
            screenOrientation: 'portrait', 
        }},
        {iosDeviceInfo: {
            deviceName: 'iPad Pro',
            screenOrientation: 'portrait', 
        }},
        {iosDeviceInfo: {
            deviceName: 'iPad Mini',
            screenOrientation: 'landscape', 
        }},
    ],
    // set batch name to the configuration
    batchName: 'CatchCo',
    showLogs: false,
    failCypressOnDiff: false,
    ignoreDisplacements: true,
    useDom: true, 
    enablePatterns: true
}
