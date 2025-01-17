import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import CareerExperience from './pages/CareerExperience.jsx';
import OutsideOfWork from './pages/OutsideOfWork.jsx';
import FE_Portfolio from './pages/FE_Portfolio.jsx';

import '../src/styles/portfolio.css';

const router = createBrowserRouter([
  { path: '/portfolio', element: <App /> },
  { path: '/fe-portfolio', element: <FE_Portfolio /> },
  { path: '/experience', element: <CareerExperience /> },
  { path: '/outside-work', element: <OutsideOfWork /> },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

