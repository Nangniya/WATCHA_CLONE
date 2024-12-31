import React from 'react';
import { createRoot } from 'react-dom/client';
import QueryProvider from '@/providers/QueryProvider/QueryProvider';
import App from '@/App';

(async function () {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  const { worker } = await import('./mocks/browser');
  return worker.start();
})();

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>,
);
