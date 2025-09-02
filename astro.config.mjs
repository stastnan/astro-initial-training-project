import { defineConfig } from 'astro/config';
import bun from '@nurodev/astro-bun';

export default defineConfig({
  output: 'server',
  adapter: bun(),
});