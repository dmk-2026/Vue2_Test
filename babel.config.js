module.exports = function (api) {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["last 2 versions", "ie >= 11"]
      },
      "useBuiltIns": "usage",
      "corejs": 3
    }]
  ]
  const plugins = [ ];

  if (process.env["ENV"] === "prod") {
    // plugins.push(...);
  }

  return {
    presets,
    plugins
  };
}