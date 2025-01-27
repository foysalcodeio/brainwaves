import { useLocation } from 'react-router-dom';
import { brainwave } from '../assets';
import { navigation } from '../constants';

const Header = () => {
  const pathname = useLocation();

  return (
    <div className='bg-n-8/90 fixed backdrop-blur-sm border-b border-n-6 lg:backdrop-blur-sm lg:border-n-6 top-0 z-50 '>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <a className='block xl:mr-8 w-[12rem]' href="#hero">
          <img src={brainwave} width={190} height={40} alt="brainwave" />
        </a>

        <nav className='top-[-5rem] left-0 right-0 bg-n-8 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent hidden fixed'>
          <div className='relative flex z-2 flex-col items-center justify-center m-auto lg:flex-row'>
            {navigation.map((item) => (
              <a key={item.id} href={item.url} className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
                ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50" } lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                {item.title} 
              </a>
            ))}

          </div>
        </nav>

      </div>
    </div>
  );
};

export default Header;