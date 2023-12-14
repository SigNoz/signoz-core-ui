module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      viteFinal: (config) => {
        return config;
      },
    },
  },
};
