// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Use the repository subpath only for production builds. Local development
// remains available at http://localhost:4321/.
const isDevelopment = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: 'https://franciscoascue.github.io',
  base: isDevelopment ? '/' : '/website-inam/',
  integrations: [react()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
