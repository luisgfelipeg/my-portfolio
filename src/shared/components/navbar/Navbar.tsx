import { useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { BsChatLeftText } from 'react-icons/bs';

type menu = {
  menuItem: string;
  menuLink: string;
};
type NavbarProps = {
  children: ReactNode;
  menu: menu[];
  logo: string;
};

export const Navbar = ({ children, menu, logo }: NavbarProps) => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <>
      <nav className='w-full sticky top-0 left-0 shadow-md bg-sky-300 z-50'>
        <div className='lg:flex lg:px-10 items-center justify-between py-4 px-7'>
          <div
            id='logo'
            className='font-bold text-2xl flex items-center text-gray-800'
          >
            <Link to='/' className='text-3xl text-black py-2 cursor-pointer'>
              {logo}
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
                    className='text-xl font-bold whitespace-nowrap lg:ml-8 lg:my-0 my-7'
                    key={item.menuItem}
                  >
                    <Link
                      to={item.menuLink}
                      className='rounded hover:outline outline-2 hover:outline-black duration-500 py-2 px-4'
                    >
                      {item.menuItem}
                    </Link>
                  </li>
                );
              return <></>;
            })}
            <button className=' flex items-center bg-slate-900 text-white font-bold font-[Poppins] py-2 px-6 rounded-lg lg:ml-8 hover:bg-white hover:text-slate-900 duration-300'>
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
