import React from 'react';
import Section from './design/Section';
import Heading from './Heading';
import { roadmap } from '../constants';
import { check2, grid, loading, loading1 } from '../assets';
import TagLine from './Tagline';
import { Gradient } from './design/Roadmap';
import Button from './Button';

const Roadmap = () => {
  return (
    <Section className='overflow-hidden' id="roadmap">
      <div className='container pb-10'>
        <Heading
          tag="Ready to get started"
          title="What we working on"
        />

        <div className='grid md:grid-cols-2 gap-6 md:gap-4 md:pb-[7rem]'>
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In Progress"
            return (
              <div key={item.id}
                className={`md:flex p-0.25 rounded-[2.5rem] even:md:translate-y-[7rem] border
                  ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}
                  `}>
                <div className='p-8 xl:p-15 bg-n-8 rounded-[2.5rem] overflow-hidden relative'>
                  <div className='absolute top-0 left-0 max-w-full'>
                    <img
                      src={grid}
                      className='w-full'
                      width={550}
                      height={550}
                      alt="Grid" />
                  </div>

                  <div className='relative z-1'>
                    <div className='flex item-center justify-between max-w-[27rem] mb-8 md:mb-20'>
                      <TagLine>{item.date}</TagLine>
                      <div className='flex items-center px-4 py-4 rounded text-n-8'>
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          className='mr-2.5'
                          width={16}
                          height={16}
                          alt={status} />
                      </div>
                      <div className='tagline'>
                        {status}
                      </div>
                    </div>
                    <div className='mb-10 -my-10 -mx-15'>
                      <img
                        src={item.imageUrl}
                        className='w-full'
                        width={630}
                        height={420}
                        alt={item.title} />
                    </div>
                    <h4 className='h4 mb-4'>{item.title}</h4>
                    <p className='body-2 text-n-4'>{item.text}</p>
                  </div>

                </div>
              </div>
            )
          })}
          <Gradient />
        </div>
        <div className='flex justify-center mt-12 md:mt-15 xl:mt-20'>
          <Button href="/roadmap">Our Roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;