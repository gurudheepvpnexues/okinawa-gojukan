import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The JSX runtime is replaced with our own so every element on the site can
// be swapped between English and Tamil / Hindi / Kannada at render time.
// The import source is a path inside the project (not a package name) so the
// development server does not pre-bundle a second copy of it — the JSX layer
// and the provider must share one copy of the active language.
const JSX_SOURCE = '/src/i18n'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ jsxImportSource: JSX_SOURCE })],
})
