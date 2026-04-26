// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativewind } = require("nativewind/metro");

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname);

// module.exports = withNativewind(config);

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro"); // Note: v5 uses /metro again

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });