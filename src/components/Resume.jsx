import FE_Resume from '../assets/Ameya_Joshi_FE_Dev_Resume.pdf';
import resumeThumbnail1 from '../assets/res_thumbnail_1.png';
import resumeThumbnail2 from '../assets/res_thumbnail_2.png';

import '../styles/portfolio.css';
import '../styles/common.css';

const Resume = () => {
  return (
    <>
      <div className='resume'>
        <h2>Resume</h2>
        <a href={FE_Resume}>
          <img
            src={resumeThumbnail1}
            className='resume-thumbnails'
            alt={`thumbnail of page 1 of Ameya's resume`}
          />
          <img
            src={resumeThumbnail2}
            className='resume-thumbnails'
            alt={`thumbnail of page 2 of Ameya's resume`}
          />
        </a>
      </div>
    </>
  );
};

export default Resume;
