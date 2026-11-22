import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Home from './pages/Home';
import { Legal } from './pages/Legal';

/** A tiny router: the site has only a few pages. /app is served by Firebase Hosting from public/app (the web app). */
function Page() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/privacy') return <Legal kind="privacy" />;
  if (path === '/terms') return <Legal kind="terms" />;
  if (path === '/delete-account') return <Legal kind="delete" />;
  return <Home />;
}

createRoot(document.getElementById('root')!).render(<StrictMode><Page /></StrictMode>);
