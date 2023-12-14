import { dirname, join } from "path";
export default {
  stories: ['../src/**/*.stories.tsx'],

  addons: [
    getAbsolutePath("@storybook/addon-actions"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/preset-create-react-app"),
    // {
    //   name: "@storybook/addon-essentials", 
    //   options: {
    //     docs: false
    //   }  
    // },
  ],

  docs: {
    autodocs: true
  },

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  }
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
  