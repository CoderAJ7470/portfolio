import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import MeteorologyStuff from './pages/MeteorologyStuff.jsx';
import AviationStuff from './pages/AviationStuff.jsx';
import FE_Portfolio from './pages/FE_Portfolio.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/portfolio', element: <FE_Portfolio /> },
  { path: '/meteorology-stuff', element: <MeteorologyStuff /> },
  { path: '/aviation-stuff', element: <AviationStuff /> },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

