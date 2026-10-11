import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
export default defineConfig([...nextVitals,...nextTypescript,
// Existing browser-only hydration, URL-prefill and route-reset effects are intentional.
// Preserve their behavior while retaining the other Hooks and Next.js checks.
{files:['src/components/site.tsx','src/components/forms.tsx'],rules:{'react-hooks/set-state-in-effect':'off'}},
globalIgnores(['.next/**','out/**','archive/**','scripts/**','test-results/**','next-env.d.ts'])]);
