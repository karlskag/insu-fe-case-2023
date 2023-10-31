/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const { ENVIRONMENT, SENTRY_AUTH_TOKEN, NODE_ENV } = process.env;

const API_URL = '';

const getDefines = (mode: string) => {
  const defines: { API_URL: string; DOT_TEST: string; ENV: string; global?: unknown } = {
    API_URL: JSON.stringify(API_URL),
    DOT_TEST: JSON.stringify(ENVIRONMENT === 'prod' ? '' : '.test'),
    ENV: JSON.stringify(ENVIRONMENT),
  };

  if (mode !== 'production' && mode !== 'test') {
    defines.global = {};
  }

  return defines;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      include: '**/*.{jsx,tsx}',
      fastRefresh: NODE_ENV !== 'test',
    }),
  ],
  resolve: {
    alias: {
      client: '/src/client',
      data: '/src/data',
      components: '/src/components',
      contexts: '/src/contexts',
      constants: '/src/constants',
      hooks: '/src/hooks',
      mocks: '/src/mocks',
      services: '/src/services',
      translations: '/src/translations',
      types: '/src/types',
      utils: '/src/utils',
      views: '/src/views',
    },
  },
  define: getDefines(mode),
  optimizeDeps: {
    exclude: ['@insurely/ui'],
    // include: ['react/jsx-runtime'],
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  test: {
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts',
    globals: true,
    // css: true,
    deps: {
      fallbackCJS: true,
      inline: [/@insurely\/ui/],
    },
  },
}));
