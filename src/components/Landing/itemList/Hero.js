import heroUrl from '../../../assets/images/hero-ad.jpg';

const Hero = () => {

  return (
    <div className='relative mx-auto font-roboto'>
      <img className='h-96 w-full object-none' src={heroUrl} alt="" />
      <span className='absolute italic text-2xl top-10 left-10 md:text-3xl md:top-10 lg:text-4xl lg:left-20 lg:top-20 text-neutral-200 font-bold z-10 opacity-75'>UN PASO A LA VEZ</span>
      <span className='absolute italic text-2xl bottom-10 left-10 md:text-3xl md:bottom-10 md:left-auto md:right-10 lg:text-4xl lg:right-20 lg:bottom-20 text-neutral-200 font-bold z-10 opacity-75'>PERO SIEMPRE HACIA ADELANTE</span>
      <div className='h-96 w-full top-0 absolute opacity-75 bg-neutral-900 transition'></div>
    </div>
  );
}

export default Hero;