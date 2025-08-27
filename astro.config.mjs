import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// Astro config (simple). We read a markdown file from project root.
export default defineConfig({
  server: { port: 4321 },

  markdown: {
    syntaxHighlight: 'shiki'
  },

  integrations: [mdx()]
});