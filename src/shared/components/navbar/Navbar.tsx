import { useState, ReactNode, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { BsChatLeftText } from 'react-icons/bs';
import { logo } from '../../constants';

export type menu = {
  menuItem: string;
  menuLink: string;
};
type NavbarProps = {
  children: ReactNode;
  menu: menu[];
};

export const Navbar = ({ children, menu }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState<String>('');
  const [open, setOpen] = useState<Boolean>(false);

  useEffect(
    () => {
      if (location.pathname === '/') {
        setActive(menu[0].menuItem);
      } else if (location.pathname === '/contato') {
        setActive('contato');
      } else {
        setActive(menu[1].menuItem);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <nav className='w-full sticky top-0 left-0 shadow-md bg-sky-300 z-50'>
        <div className='lg:flex lg:px-10 items-center justify-between py-4 px-7 lg:h-24'>
          <div
            id='logo'
            className='font-bold text-2xl flex items-center text-gray-800'
          >
            <Link
              to='/'
              className='text-3xl text-black cursor-pointer flex items-center gap-3'
              onClick={() => {
                if (open) {
                  setOpen(!open);
                }
                setActive('Página Inicial');
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt='logo' width='50px' />
              <p className='text-2xl'>
                Luis<span className='lg:block'> Felipe</span>
              </p>
            </Link>
          </div>
          <div
            id='mobile button close and open menu'
            onClick={() => setOpen(!open)}
            className='lg:hidden text-3xl absolute right-9 top-7 cursor-pointer'
          >
            {open ? <IoCloseSharp /> : <FaBars />}
          </div>
          <ul
            id='menu links'
            className={`md:pb-8 lg:flex lg:items-center lg:pb-0 lg:static lg:z-auto lg:w-auto lg:pl-0 pl-7 z-[-1] left-0 pb-12 absolute bg-sky-300 
             w-full transition-all duration-500 ease-in ${
               open ? 'top-20' : 'top-[-490px]'
             }`}
          >
            {menu.map((item) => {
              if (item)
                return (
                  <li
                    className={`${
                      active === item.menuItem ? 'text-white' : 'text-black'
                    } text-xl font-bold whitespace-nowrap lg:ml-8 lg:my-0 my-7`}
                    key={item.menuItem}
                    onClick={() => {
                      if (open) {
                        setOpen(!open);
                      }
                      setActive(item.menuItem);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Link to={item.menuLink} className='duration-500 py-2 px-4'>
                      {item.menuItem}
                    </Link>
                  </li>
                );
              return null;
            })}
            <button
              className={`flex items-center   font-bold font-[Poppins] py-2 px-6 lg:ml-8 rounded-lg hover:bg-white hover:text-slate-900 duration-300 ${
                active === 'contato'
                  ? 'bg-white text-slate-900'
                  : 'bg-slate-900 text-white'
              }`}
              onClick={() => {
                navigate('/contato');
                if (open) {
                  setOpen(!open);
                }
                setActive('contato');
                window.scrollTo(0, 0);
              }}
            >
              CONTATO |
              <BsChatLeftText className='ml-2 text-lg' />
            </button>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
};
