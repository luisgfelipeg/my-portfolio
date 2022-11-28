import { AiFillGithub } from 'react-icons/ai';
import { SiLinkedin } from 'react-icons/si';

import Me from '../shared/assets/images/me.png';
import { LayoutBase } from '../shared/components';
import CV from '../shared/assets/archives/cvLuis.pdf';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <LayoutBase>
      <div className='flex justify-center items-center flex-col gap-3 text-white'>
        <h5>Olá, eu sou o</h5>
        <h1 className='text-5xl font-bold'>Luis Felipe</h1>
        <h5 className='text-gray-400 font-bold text-sm'>
          Desenvolvedor Front-End
        </h5>
        <a
          href={CV}
          download
          className='mt-3 p-4 mb-3 rounded-full text-lg text-sky-300 hover:text-slate-900 hover:bg-white duration-300'
        >
          Download CV
        </a>
        <div className='w-96 flex justify-center overflow-hidden items-center bg-black rounded-full'>
          <img className='w-52 me' src={Me} alt='Minha foto' />
        </div>
        <div className='flex justify-center items-center flex-col gap-4 text-sky-300 absolute left-72 bottom-96 after:w-[1px] after:h-10 after:bg-sky-300'>
          <a
            href='https://br.linkedin.com/in/luis-felipe-gongora-garcia'
            target='_blank'
            rel='noreferrer'
            className='duration-300 hover:text-white'
          >
            <SiLinkedin />
          </a>
          <a
            href='https://github.com/luisgfelipeg'
            target='_blank'
            rel='noreferrer'
            className='duration-300 hover:text-white'
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </LayoutBase>
  );
};
