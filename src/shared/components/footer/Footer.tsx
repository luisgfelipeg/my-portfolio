import logo from '../../assets/images/logo.png';
import { SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface FooterProps {
  shortPage?: boolean;
}

export const Footer = ({ shortPage }: FooterProps) => {
  return (
    <footer
      className={`bg-orange-400 py-12 flex justify-evenly flex-col items-center font-bold left-0 bottom-0 w-full ${
        shortPage ? 'fixed bottom-0 w-full' : 'relative'
      }`}
    >
      <Link to='/' className='mb-4'>
        <img src={logo} alt='logo' width='50px' />
      </Link>
      <ul className='flex flex-wrap justify-center gap-8 mb-4'>
        <li>
          <Link to='/' onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/meus-projetos' onClick={() => window.scrollTo(0, 0)}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to='/contato' onClick={() => window.scrollTo(0, 0)}>
            Contato
          </Link>
        </li>
      </ul>

      <div className='flex justify-center items-center gap-4 mb-4'>
        <a
          href='https://br.linkedin.com/in/luis-felipe-gongora-garcia'
          target='_blank'
          rel='noreferrer'
          className='bg-slate-900 text-white p-3 rounded-xl border border-solid border-transparent'
        >
          <SiLinkedin />
        </a>
        <a
          href='https://github.com/luisgfelipeg'
          target='_blank'
          rel='noreferrer'
          className='bg-slate-900 text-white p-3 rounded-xl border border-solid border-transparent'
        >
          <AiFillGithub />
        </a>
      </div>

      <div>
        <small>&copy; Luis Felipe | Todos os direitos reservados.</small>
      </div>
    </footer>
  );
};
