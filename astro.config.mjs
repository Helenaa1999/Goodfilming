// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  experimental: {
    session:false
  },
  vite: {
    envPrefix: ['BACKEND_HOST']
  },
  adapter: vercel()
});