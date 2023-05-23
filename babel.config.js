module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@env": "./environments",
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@styles": "./src/styles",
            "@state": "./src/state",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
