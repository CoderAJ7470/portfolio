import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid';
import FE_Resume from '../assets/Ameya_Joshi_FE_Dev_Resume.pdf';
import resumeThumbnail1 from '../assets/res_thumbnail_1.png';
import resumeThumbnail2 from '../assets/res_thumbnail_2.png';

import '../styles/portfolio.css';
import '../styles/common.css';

const Resume = () => {
  return (
    <>
      <section className='resume'>
        <a
          href={FE_Resume}
          alt='Opens pdf resume in new tab or window'
          target='_blank'
          className='open-resume-icon-link'
        >
          <ArrowTopRightOnSquareIcon />
        </a>
        <a href={FE_Resume}>
          <img
            src={resumeThumbnail1}
            alt={`thumbnail of page 1 of Ameya's resume`}
          />
          <img
            src={resumeThumbnail2}
            alt={`thumbnail of page 2 of Ameya's resume`}
          />
        </a>
      </section>
    </>
  );
};

export default Resume;
