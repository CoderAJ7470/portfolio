// Helper function to show page heading based on curent location
export const returnHeading = (pathname) => {
  switch (pathname) {
    case '/portfolio/fe-portfolio':
      return 'Portfolio';
    case '/portfolio/experience':
      return 'Experience';
    case '/portfolio/projects':
      return 'Projects';
    case '/portfolio/outside-work':
      return 'Outside Work';
  }
};
