<div
  role='img'
  className='window'
  alt='An interactive aircraft window with a slideable window shade'
>
  <div
    className='shade'
    id='shadeFour'
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
      Projects
    </p>
  </div>
  <div className='window-links'>
    <a href='/portfolio/projects'>A showcase of past and current projects</a>
  </div>
</div>;
