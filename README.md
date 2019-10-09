# Test262-Harness Preprocessor

This project demonstrates how to use a `test262-harness` `preprocessor` to run tests that are transpiled, but require handling for failures that occur during the transpilation phase, and before the test execution phase. 


## Get Started


Here's the entire script to run to get started: 

```sh
# Make a place to work in...
mkdir test262-work-space && cd test262-work-space;

# Clone Test262 into your work space
git clone https://github.com/tc39/test262.git --depth=1;
export TEST262=$PWD/test262;

# Clone this project into your work space
git clone https://github.com/rwaldron/test262-harness-preprocessors.git
cd test262-harness-preprocessors;
npm install;
npm run upgrade:babel;
npm install test262-harness -g;
```

You will now have the latest [`Test262`](https://github.com/tc39/test262), [`test262-harness`](https://github.com/bterlson/test262-harness) and this project. At this point, you can proceed to running tests with a preprocessor, using Node.js as your host, but you may eventually want to install other engines, which you will need [`jsvu`](https://github.com/GoogleChromeLabs/jsvu/) to do for you: 

```sh
npm install jsvu -g;
export PATH="${HOME}/.jsvu:${PATH}";
jsvu --engines=all;
```

## Running Test262-Harness With A Preprocessor


Here's an example using [`preprocessors/babel`](#babel)
```sh
test262-harness --test262Dir=$TEST262 --hostType=node --hostPath=`which node` --preprocessor="preprocessors/babel" $TEST262/test/language/statements/class/elements/*.js
```

## Preprocessors

### `babel`

Usage: `--preprocessor="preprocessors/babel"`

Transpiles test contents with babel, using the following config: 

```
{
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-private-methods",
  ]
}
```

### `babel-with-preset-env-spec-true`

Usage: `--preprocessor="preprocessors/babel-with-preset-env-spec-true"`

Transpiles test contents with babel, using the following config: 

```
{
  presets: [[presets*, { spec: true }]],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-private-methods",
  ]
}
```
(\* `const presets = require("@babel/preset-env");`)



## License

[LICENSE](LICENSE)
