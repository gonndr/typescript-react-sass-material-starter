module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx)", "**/?(*.)+(spec|test).+(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)?$": [
      "babel-jest",
      // {
      //   babelConfig: true,
      // },
    ],
    // "^.+\\.ts?$": "ts-jest",
    "^.+\\.(js|jsx)?$": ["babel-jest"],
  },
  transformIgnorePatterns: ["/node_modules/(?!react-markdown/)"],
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
    "react-markdown":
      "<rootDir>/node_modules/react-markdown/react-markdown.min.js",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};
