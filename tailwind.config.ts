import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: '#9a4a1f',
        copper: '#9a4a1f',
      },
    },
  },
  plugins: [],
};

export default config;
