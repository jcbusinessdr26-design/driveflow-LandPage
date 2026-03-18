import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { supabase } from './lib/supabase';

// Simple connection test
supabase.from('profiles').select('id', { count: 'exact', head: true })
  .then(({ error }) => {
    if (error) console.error('Supabase connection error:', error.message);
    else console.log('Supabase connected successfully');
  });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
