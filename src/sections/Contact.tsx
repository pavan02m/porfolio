import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div className='py-16 pt-12 lg:py-24 z-0 lg:pt-20' id='contact'>
      <div className="container">
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative -z-10 pointer-events-none'>
          <div className="absolute inset-0 opacity-5  -z-10" style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>Let`s Create Something Amazing Together</h2>
              <p className='text-sm mt-2 md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde fugit aliquam labore!</p>
            </div>
            <div>
              <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 md:mt-0 w-max border border-gray-950 cursor-pointer'>
                <span className='font-semibold '>Contct Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
