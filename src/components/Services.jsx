import React from 'react';
import Section from './design/Section';
import Heading from './Heading';
import { service1, service2, service3, check } from '../assets';
import { brainwaveServices, brainwaveServicesIcons } from '../constants';
import Generating from './Generating';
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from './design/Services';

const Services = () => {
  return (
    <Section id="how to use">
      <div className='container'>
        <Heading
          title="Neuro AI craft for creative minds"
          text="Neurowave unlocks the potential of AI-powered system"
        />

        <div className='relative'>

          <div className='z-1 relative flex items-center h-[39rem] xl:h-[46rem] mb-5 p-5 lg:p-20 border border-n-1/10 rounded-3xl overflow-hidden '>
            <div className='top-0 left-0 w-full h-full pointer-events-none absolute md:w-3/5 xl:w-auto'>
              <img className='w-full h-full object-cover md:object-right'
                src={service1}
                width={800}
                height={750}
                alt="Smartest AI" />
            </div>
            <div className='relative z-1 max-w-[17rem] ml-auto'>
              <h4 className='h4 mb-4'>Smartest AI</h4>
              <p className='body-2 mb-[3rem] text-n-3'>Brainwave unlocks the potential of AI-powered applications</p>
              <ul className='body-2'>
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className='flex items-start py-4 border-t border-n-6'
                  >

                    <img width={24} height={24} src={check} alt="" />
                    <p className='ml-5'>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className='relative z-1 grid lg:grid-cols-2 gap-4'>

            <div className='relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden'>
              <div className='absolute inset-0'>
                <img src={service2}
                  className='h-full w-full object-cover'
                  width={630}
                  height={750}
                  alt="robot" />
              </div>
              <div className='absolute inset-0 flex flex-col p-8 justify-end bg-gradient-to-b from-n-8/5 to-n-8/95 lg:p-14'>
                <h4 className='h4 mb-4'>Photo Editing</h4>
                <p className='body-2 mb-[3rem] text-n-3'>
                  Automatically enhance your photos using our AI app's photo editing feature. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            <div className='p-4 overflow-hidden bg-n-7 rounded-3xl lg:min-h-[46rem]'>
              <div className='py-12 px-4 xl:p-8'>
                <h4>Video Generation</h4>
                <p className='body-2 mb-[2rem] text-n-4'>The worlds most powerful AI photo and video art generation engine. What will you create?</p>
                <ul className='flex items-center justify-between'>
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex rounded-2xl items-center justify-center ${index === 2 ?
                        'w-[3rem] h-[3rem] p-0.3 bg-conic-gradient p-0.25 md:w-[4.5rem] md:h-[4.5rem] ' :
                        'flex bg-n-6 h-10 w-10 md:w-15 md:h-15 '}`}>

                      <div className={` ${index === 2 ? 'w-full h-full flex items-center justify-center rounded-[1rem] bg-n-7' : ''} `}>
                        <img src={item} width={24} height={24} alt={item} />
                      </div>


                    </li>
                  ))}
                </ul>
              </div>

              <div className='relative h-[20rem] md:h-[25rem] overflow-hidden bg-n-8 rounded-xl'>
                <img src={service3}
                  className='w-full h-full object-cover'
                  width={520}
                  height={400}
                  alt="Scary robot" />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;