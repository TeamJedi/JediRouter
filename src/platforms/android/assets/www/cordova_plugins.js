cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    },
    {
        "id": "org.apache.cordova.shell-exec.shell-exec",
        "file": "plugins/org.apache.cordova.shell-exec/www/shell-exec.js",
        "pluginId": "org.apache.cordova.shell-exec",
        "clobbers": [
            "shell-exec"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-background-mode": "0.6.5",
    "org.apache.cordova.shell-exec": "1.0.0",
    "cordova-plugin-whitelist": "1.3.0"
};
// BOTTOM OF METADATA
});