import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';


const footerLinks = [
  {
    title:'GitHub',
    link:'#'
  },
  {
    title:'LinkedIn',
    link: '#'
  }
]

export const Footer = () => {
  return (
    <footer className='relative -z-10 pointer-events-none overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none'></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40 '>&copy; 2024. All Rights reserved</div>
          <nav className='flex flex-col md:flex-row items-center gap-6'>
            {footerLinks.map((item) => (
              <a className='inline-flex items-center gap-1.5 cursor-pointer' href={item.link} key={item.title}>
                <span className='font-semibold'>{item.title}</span>   
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
