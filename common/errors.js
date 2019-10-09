[
  "FeaturesNotSupportedError",
  "PathNotSupportedError",
].forEach(ErrorClassName => {
  module.exports[ErrorClassName] = class extends Error {
    get [ErrorClassName]() {
      return ErrorClassName;
    }
  };
})
