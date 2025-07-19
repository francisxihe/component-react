import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['components/**/*'],
      exclude: ['**/*.stories.*', '**/*.test.*'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'components/index.tsx'),
      name: 'ReactComponentLib',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@arco-design/web-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@arco-design/web-react': 'ArcoDesign',
        },
      },
    },
    outDir: 'dist',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'components'),
    },
  },
});