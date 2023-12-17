const StyleDictionary = require('style-dictionary');
const fs = require('fs-extra');
const webPath = `build/tokens/`;
fs.removeSync(webPath);

function removeTitle(dictionary) {
  dictionary.allTokens = dictionary.allTokens.map(token => {
    token.name = token.name.substring(token.name.indexOf("-") + 1);
    return token;
  });
}

/**
 * This function will wrap a built-in format and replace `.value` with `.darkValue`
 * if a token has a `.darkValue`.
 * @param {String} format - the name of the built-in format
 * @returns {Function}
 */
function darkFormatWrapper(format) {
  return function (args) {
    const dictionary = Object.assign({}, args.dictionary);
    dictionary.allProperties = dictionary.allProperties.map(token => {
      const { darkValue } = token;
      if (darkValue) {
        const returnToken = Object.assign({}, token, {
          value: token.darkValue
        });
        return returnToken;
      } else {
        return token;
      }
    });
    dictionary.allTokens = dictionary.allTokens.map(token => {
      const { darkValue } = token;
      if (darkValue) {
        const returnToken = Object.assign({}, token, {
          value: token.darkValue
        });
        return returnToken;
      } else {
        return token;
      }
    });

    removeTitle(dictionary);
    args.dictionary = dictionary;
    // Use the built-in format but with our customized dictionary object
    // so it will output the darkValue instead of the value
    return StyleDictionary.format[format]({ ...args, dictionary })
  }
}

function lightFormatWrapper(format) {
  return function (args) {
    const dictionary = Object.assign({}, args.dictionary);
    removeTitle(dictionary);
    args.dictionary = dictionary;
    return StyleDictionary.format[format]({ ...args, dictionary })
  }
}

const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

StyleDictionary.registerFormat({
  name: 'myCustomFormat',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;
    return fileHeader({ file }) +
      ':root {\n' +
      formattedVariables({ format: 'scss', dictionary, outputReferences }) +
      '\n}\n';
  }
});

const getSticthedVars = (props) => {
  return `$token-vars: (${props.allProperties.reduce((accumulator, { value, name }) => accumulator + `${name}: ${value},`, '')})`;
}

StyleDictionary.extend({
  // custom formats
  format: {
    scssDark: darkFormatWrapper(`scss/variables`),
    scssLight: lightFormatWrapper(`scss/variables`),
    stitchVars: getSticthedVars
  },

  source: [
    `tokens/**/*.json`
  ],

  platforms: {
    css: {
      transformGroup: `scss`,
      buildPath: webPath,
      files: [{
        destination: `variables.scss`,
        format: `scssLight`,
        options: {
          outputReferences: true
        }
      },
      {
        destination: `variables-dark.scss`,
        format: `scssDark`,
        filter: (token) => token.darkValue && token.attributes.category === `color`
      },
    ]},
    web: {
      transformGroup: "web",
      buildPath: webPath,
      files: [{
        destination: "_tokens.scss",
        format: "stitchVars"
      }]
    },

  }
}).buildAllPlatforms();
