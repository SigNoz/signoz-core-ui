# Signoz Component and Token Library Documentation
## Introduction
The Signoz SCSS Token Library is a collection of reusable design tokens that help maintain consistency in styling across your project. This documentation provides guidance on how to use the library and how to update it by adding or modifying tokens.

## Usage
Installation
Before using the SCSS Token Library, ensure that you have the following dependencies installed:

```
yarn add scss
```

## Importing the Library
To use the scss token in the project install the `@signozhq/ui-core` package in the project.

```bash
yarn add @signozhq/ui-core
```

Configure webpack to use the token globally.
- Create main.scss inside `src/scss/main.scss` and add the following code.
    ```scss
    @forward '@signozhq/ui-core/packages/token/build/tokens/variables';
    ```
- Navigate to webpack.config.js inside the project
- Configure scss 
    ```javascript
    {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            styleLoader,
            // Translates CSS into CommonJS
            cssLoader,
            // Compiles Sass to CSS
            {
                loader: sassLoader,
                options: {
                    additionalData: `@use "${resolve(
                        __dirname,
                        'src/scss/main.scss',
                    )}" as *;`,
                },
            },
        ],
    },
    ```

## Using Tokens

Once the library is imported, and configure globally you can use the tokens in your SCSS stylesheets:

```css
.element {
  background-color: $color-primary;
  font-size: $font-size-lg;
}
```

## Folder structure

```
├── DOCUMENTATION.md
├── README.md
├── lerna.json
├── nx.json
├── package.json
├── packages
│   └── token
│       ├── README.md
│       ├── build
│       │   └── tokens
│       │       └── variables.scss
│       ├── build.js
│       ├── config.json
│       ├── package.json
│       └── tokens
│           ├── color
│           │   ├── base.json
│           │   └── font.json
│           ├── size
│           │   ├── border.json
│           │   ├── font.json
│           │   ├── size.json
│           │   └── typography.json
│           └── weight
│               └── font.json
└── yarn.lock
```

## Updating tokens

Navigate to packages/tokens/tokens folder. You can find the .json file specific to what you want to changes. 

As of now we have color, size and weight tokens.

For example: Want to update color base tokens, navigate and open `color/base.json`, add the `base` object.

```json
{
  "color": {
    "base": {
      "gray": {
        "light": {
          "value": "rgba(255, 255, 255, 0.45)"
        }
      },
      "navyblue": {
        "light": {
          "value": "rgba(22, 104, 220, 1)"
        }
      }
    }
  }
}
```

> Note: For updating size token just specify the number, it will convert to rem value at the time of creating the token.

Once the tokens are updates, run the following command to build and create a tokens

```bash
npm run build
```

## Publishing the library

Update the version in `package.json`

Run the command to publish the update library

```bash
npm publish
```




