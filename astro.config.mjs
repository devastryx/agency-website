// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  outDir: './dist',
  base: '/',
  site: 'https://flowstatelabs.ai',
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    server: {
      allowedHosts: [
        'all',
        'localhost',
        '127.0.0.1',
        '.ngrok-free.app',
        '.ngrok.io',
        '.loca.lt',
        '.ngrok.app',
        'capital-bonefish-frankly.ngrok-free.app'
      ],
      host: true,
      hmr: {
        host: 'localhost',
      },
    },
  },
});