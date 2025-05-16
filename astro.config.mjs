// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  experimental: {
    session:true
  },
  
  adapter: node({
    mode: 'standalone'
  })
});