import ReactTypingEffect from 'react-typing-effect';
import Me from '../../assets/images/me.png';
import CV from '../../assets/archives/cvLuis.pdf';
import { SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

export const Intro = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <ReactTypingEffect
        text={['Bem vindo ao meu Portfólio', 'Eu sou o']}
        displayTextRenderer={(text) => {
          return <h5>{text}</h5>;
        }}
        speed={100}
        eraseSpeed={200}
        eraseDelay={2500}
        typingDelay={1000}
      />
      <h1 className='text-5xl font-bold'>Luis Felipe</h1>
      <h5 className='text-gray-400 font-bold text-sm'>
        Desenvolvedor Full-Stack
      </h5>
      <a
        href={CV}
        download
        className='mt-3 p-4 mb-3 rounded-full text-lg text-sky-300 hover:text-slate-900 hover:bg-white duration-300'
      >
        Download CV
      </a>
      <div className='flex justify-center overflow-hidden items-center bg-black border-custom w-80 h-80'>
        <img className='w-52 me' src={Me} alt='Minha foto' />
      </div>

      <div className='flex justify-center items-center flex-col gap-4 text-sky-300 absolute left-60 bottom-96 after:w-[1px] after:h-10 after:bg-sky-300 max-2xl:left-40 max-xl:left-30 max-lg:left-20 max-md:left-10 max-sm:hidden'>
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
    </section>
  );
};
