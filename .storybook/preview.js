import "../src/styles.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import * as NextImage from "next/image";
import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

// Create a client
const queryClient = new QueryClient();

export const decorators = [
  (story) => {
    return (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
