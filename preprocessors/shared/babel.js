const {
  FeaturesNotSupportedError,
  PathNotSupportedError
} = require("../../common/errors");
const babel = require("@babel/core");

module.exports = function(config) {

  return function(test) {
    let error;

    // TODO: move this to some kind of configuration
    // if (test.file.includes("test/intl402")) {
    //   error = new PathNotSupported(test.relative);
    // }

    // Other checks here...
    // if (test.features.includes("...")) {
    //   error = new FeaturesNotSupportedError("...");
    // }

    if (!error) {
      try {
        test.contents = babel.transform(test.contents, config).code;
      } catch (caught) {
        error = caught;
      }
    }

    if (error) {
      test.result = {
        stderr: `${error.name}: ${error.message}\n`,
        stdout: '',
        error
      };
    }

    return test;
  };
};


