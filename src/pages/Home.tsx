import { Link } from 'react-router-dom';
import { SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

import Me from '../shared/assets/images/me.png';
import { LayoutBase } from '../shared/components';
import CV from '../shared/assets/archives/cvLuis.pdf';
import MeAbout from '../shared/assets/images/meAbout.jpg';

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
        <div className='flex justify-center flex-col items-center mt-52'>
          <h5 className='text-gray-400 font-bold text-sm'>Um pouco</h5>
          <h1 className='text-4xl font-bold text-sky-300'>Sobre mim!</h1>
          <div className='mt-20 flex justify-center gap-48'>
            <img
              className='w-96 rounded-3xl ring-8'
              src={MeAbout}
              alt='Minha foto'
            />
            <div className='w-2/5'>
              <p className='text-gray-400 text-xl'>
                Tenho 25 anos, sempre fui apaixonado por tecnologia, e decidi
                seguir nessa área que sempre fez parte de alguma forma na minha
                vida, desde então tenho me aprofundado cada vez mais em
                programação. Atualmente estou cursando Análise e Desenvolvimento
                de Sistemas. Fiz esse Portfólio pra mostrar o que já sou capaz
                de desenvolver, e estou em busca de uma oportunidade
                profissional com disposição a me propor novos desafios visando
                meu desenvolvimento e o da empresa onde atuar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutBase>
  );
};
