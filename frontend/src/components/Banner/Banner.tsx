import LogoImg from './uol-logo-white.png';

function Banner() {
  return (
    <div className='banner'>
      <div className='bannerContainer'>
        <img id='logo' src={LogoImg} alt='uol-logo' />
      </div>
    </div>
  );
}

export default Banner;
