import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The web app (PWA) is built in the app repo and copied into public/app (see README), so it is served at /app.
export default defineConfig({ plugins: [react()], build: { outDir: 'dist' } });
