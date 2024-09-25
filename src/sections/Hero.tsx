'use client'
import { Link } from 'react-scroll/modules';
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import { Orbit } from '@/components/Orbit';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcoon from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  return (
    <div className='py-48 md:py-56 lg:py-60 relative z-0 overflow-x-clip' id='hero'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>

        <Orbit size={430} rotation={-14} spinDuration={'30s'}>
          <SparkleIcoon className='size-8 text-emerald-300/20' />
        </Orbit>
        <Orbit size={440} rotation={79} spinDuration={'32s'}>
          <SparkleIcoon className='size-5 text-emerald-300/20' />
        </Orbit>
        <Orbit size={520} rotation={-41} spinDuration={'34s'}>
          <div className='size-2 rounded-full bg-emerald-300/20' />
        </Orbit>
        <Orbit size={530} rotation={178} spinDuration={'36s'}>
          <SparkleIcoon className='size-10 text-emerald-300/20' />
        </Orbit>
        <Orbit size={550} rotation={20} spinDuration={'38s'}>
          <StarIcon className='size-12 text-emerald-300' />
        </Orbit>
        <Orbit size={590} rotation={98} spinDuration={'40s'}>
          <StarIcon className='size-8 text-emerald-300' />
        </Orbit>
        <Orbit size={650} rotation={-5} spinDuration={'42s'}>
          <div className='size-2 rounded-full bg-emerald-300/20' />
        </Orbit>
        <Orbit size={710} rotation={144} spinDuration={'44s'}>
          <SparkleIcoon className='size-14 text-emerald-300/20' />
        </Orbit>
        <Orbit size={720} rotation={86} spinDuration={'46s'}>
          <div className='size-3 rounded-full bg-emerald-300/20' />
        </Orbit>
        <Orbit size={800} rotation={-72} spinDuration={'48s'}>
          <StarIcon className='size-28 text-emerald-300' />
        </Orbit>

      </div>

      <div className="container">

        <div className='flex flex-col items-center'>
          <Image src={memojiImage} className='size-[100px]' alt='hero-image' />
          <div className='bg-gray-950 border border-gray-950 px-4 py-1.5 inline-flex items-center gap-4'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>

            </div>
            <div className='text-sm font-medium'>Web Developer</div>
          </div>
        </div>

        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Pavan Metkari</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>🚀 Tech enthusiast with a flair for building dynamic, scalable web applications 💻✨</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <Link to='projects' spy={true}
            smooth={true}
            offset={-50}
            duration={2000} className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className="size-4" />
          </Link>
          <Link to='contact' spy={true}
            smooth={true}
            offset={-50}
            duration={3000} className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer'>
            <span>👋</span>
            <span className='font-semibold'>Lets Connect</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
