import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Main from './pages/MainContent.jsx';
import CareerExperience from './pages/CareerExperience.jsx';
import OutsideOfWork from './pages/OutsideOfWork.jsx';
import FE_Portfolio from './pages/FE_Portfolio.jsx';
import Projects from './pages/Projects.jsx';

import '../src/styles/portfolio.css';

const router = createBrowserRouter([
  {
    path: '/portfolio/',
    element: <App />,
    children: [
      { path: '/portfolio/', element: <Main /> },
      { path: '/portfolio/fe-portfolio', element: <FE_Portfolio /> },
      { path: '/portfolio/experience', element: <CareerExperience /> },
      { path: '/portfolio/outside-work', element: <OutsideOfWork /> },
      { path: '/portfolio/projects', element: <Projects /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

