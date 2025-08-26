import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import { Suspense } from 'react'

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);
