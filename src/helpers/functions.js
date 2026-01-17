// Helper function to show page heading based on curent location
const HEADING_MAP = {
  '/portfolio/fe-portfolio': 'Portfolio',
  '/portfolio/experience': 'Experience',
  '/portfolio/projects': 'Projects',
  '/portfolio/outside-work': 'Outside Work',
};

export const returnHeading = (pathname) => HEADING_MAP[pathname] ?? '';
