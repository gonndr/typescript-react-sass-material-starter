module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx)", "**/?(*.)+(spec|test).+(ts|tsx)"],
  transform: {
    "^.+\\.tsx?$": [
      "babel-jest",
      // {
      //   babelConfig: true,
      // },
    ],
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};
