import '../styles/windows.css';

const Windows = () => {
  const slideShade = (e) => {
    let shadeId = '';

    // If the user clicks on/taps the window shade text, then you still want the
    // shade to slide up
    if (e.target.className === 'shadeText') {
      // prevent event from bubbling up to parent div and firing twice
      // resulting in the window opening and closing so quickly that it
      // looks as if it is not opening at all
      e.stopPropagation();
      shadeId = e.target.parentNode.id;
    } else {
      shadeId = e.target.id;
    }

    const windowShade = document.getElementById(shadeId);
    windowShade.classList.toggle('slide');
  };

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      slideShade(e);
    }
  };

  const handleOnFocus = () => {
    document
      .querySelector('#windowContainer')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='windows-container' id='windowContainer'>
      <div
        role='img'
        className='window'
        alt='An interactive aircraft window with a slideable window shade'
      >
        <div
          className='shade'
          id='shadeOne'
          onClick={slideShade}
          onKeyDown={handleOnKeyDown}
        >
          <p
            className='shadeText'
            tabIndex={0}
            onClick={slideShade}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
          >
            Curriculum Vitae and Skills
          </p>
        </div>
        <div className='window-links'>
          <a href='/fe-portfolio'>See my resume and skills</a>
        </div>
      </div>
      <div
        role='img'
        className='window'
        alt='An interactive aircraft window with a slideable window shade'
      >
        <div
          className='shade'
          id='shadeTwo'
          onClick={slideShade}
          onKeyDown={handleOnKeyDown}
        >
          <p
            className='shadeText'
            tabIndex={0}
            onClick={slideShade}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
          >
            Career Experience
          </p>
        </div>
        <div className='window-links'>
          <a href='/experience'>Key career experiences</a>
        </div>
      </div>
      <div
        role='img'
        className='window'
        alt='An interactive aircraft window with a slideable window shade'
      >
        <div
          className='shade'
          id='shadeThree'
          onClick={slideShade}
          onKeyDown={handleOnKeyDown}
        >
          <p
            className='shadeText'
            tabIndex={0}
            onClick={slideShade}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
          >
            Outside of Work
          </p>
        </div>
        <div className='window-links'>
          <a href='/outside-work'>My hobbies and other things</a>
        </div>
      </div>
    </section>
  );
};

export default Windows;
