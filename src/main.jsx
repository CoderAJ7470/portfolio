import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import LandingPage from './pages/LandingPage.jsx';
import CareerExperience from './pages/CareerExperience.jsx';
import OutsideOfWork from './pages/OutsideOfWork.jsx';
import FE_Portfolio from './pages/FE_Portfolio.jsx';
import Projects from './pages/Projects.jsx';

import './styles/portfolio.css';
import './styles/common.css';
import './styles/nav.css';

const router = createBrowserRouter([
  {
    path: '/portfolio/',
    element: <App />,
    children: [
      { path: '/portfolio/', element: <LandingPage /> },
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

