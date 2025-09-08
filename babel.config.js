module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel"] // bundle react native paper to get smaller bundle size by excluding modules you don't use
      }
    }
  };
};
