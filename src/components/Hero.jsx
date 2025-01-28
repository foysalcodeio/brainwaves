
import { curve, robot } from '../assets';
import Button from './Button';
import Section from './design/Section';

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className='container relative '>
        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:md:[6rem]'>
        <h1 className='h1 mb-6'>
          Explore the  Possibilites of AI Chatting with NeurowaveCurve
          <span className='inline-block relative'>Neurowave <img src={curve} className='absolute top-0 w-full xl:-mt-2' width={624} height={24} alt="Curve" /></span>
        </h1>
        <p className='body-1 max-w-3xl mb-6 text-n-2 mx-auto'>
        Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
        </p>
        <Button href="/pricing" white>
          Get Started
        </Button>
        <div className='max-w-[23rem]'>
          <img src={robot} alt="" />
        </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;