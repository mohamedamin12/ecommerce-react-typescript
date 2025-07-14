import { createRoot } from 'react-dom/client'
import AppRouter from "@routes/AppRouter";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@styles/global.css";


createRoot(document.getElementById('root')!).render(
  <div>
    <AppRouter />
  </div>
)
