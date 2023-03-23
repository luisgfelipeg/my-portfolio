import { MdOutlineNextWeek } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { LayoutBase } from '../shared/layouts';
import { About, Intro, Skills } from '../shared/components';

export const Home = () => {
  return (
    <LayoutBase>
      <div className='flex justify-center items-center flex-col gap-52 text-white max-xl:gap-20'>
        <Intro />
        <About />
        <Skills />
        <div className='mb-20'>
          <Link
            className='flex justify-center items-center flex-col text-sky-300'
            to={'/meus-projetos'}
          >
            <MdOutlineNextWeek className='text-6xl' />
            <p className='text-4xl font-bold'>Meus Projetos!</p>
          </Link>
        </div>
      </div>
    </LayoutBase>
  );
};
