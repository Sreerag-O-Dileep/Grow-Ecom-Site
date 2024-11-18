import type { Preview } from "@storybook/react";
import '@/styles/globals.css';

import { initialize, mswLoader } from 'msw-storybook-addon';
initialize();


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light', 
      values: [
        { name: 'light', value: '#ffffff' }, 
        { name: 'dark', value: '#000000' }, 
      ],
    },
    loaders: [mswLoader],
  },
};

export default preview;
