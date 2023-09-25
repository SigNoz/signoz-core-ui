const StyleDictionary = require('style-dictionary');
const fs = require('fs-extra');
const webPath = `build/tokens/`;
fs.removeSync(webPath);

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

    args.dictionary = dictionary;
    console.log(StyleDictionary.format[format]({ ...args })
    );

    // Use the built-in format but with our customized dictionary object
    // so it will output the darkValue instead of the value
    return StyleDictionary.format[format]({ ...args, dictionary })
  }
}

StyleDictionary.extend({
  // custom formats
  format: {
    scssDark: darkFormatWrapper(`scss/variables`),
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
        format: `scss/variables`,
        options: {
          outputReferences: true
        }
      }, {
        destination: `variables-dark.scss`,
        format: `scssDark`,
        filter: (token) => token.darkValue && token.attributes.category === `color`
      }]
    }
  }
}).buildAllPlatforms();