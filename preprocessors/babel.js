// ./shared/babel exports a function that expects
// a babel config. That function returns a
// preprocessor function.
module.exports = require("./shared/babel")({
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-private-methods",
  ]
});
