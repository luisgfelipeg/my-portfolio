import { useNavigate } from 'react-router-dom';
import { useState, ReactNode } from 'react';

interface INavbarProps {
  children: ReactNode;
}

export const Navbar = ({ children }: INavbarProps) => {
  const navigate = useNavigate();
  const { user, setUser } = useLogInOrLogOutContext();

  const [open, setOpen] = useState<Boolean>(false);

  const signOut = (e) => {
    e.preventDefault();
    sessionStorage.clear('user');
    if (!sessionStorage.getItem('user')) {
      setUser(false);
      navigate('/');
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    navigate('/');
  };

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  return (
    <>
      <nav className='w-full fixed top-0 left-0 shadow-md bg-neutral-100'>
        <div className='lg:flex lg:px-10 items-center justify-between py-4 px-7'>
          <div
            id='logo'
            className='font-bold text-2xl flex items-center text-gray-800'
          >
            <Link
              to='/'
              className='text-3xl text-indigo-600 py-2 cursor-pointer'
            >
              CaseMania
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
            className={`md:pb-8 lg:flex lg:items-center lg:pb-0 lg:static lg:z-auto lg:w-auto lg:pl-0 pl-7 z-[-1] left-0 pb-12 absolute bg-neutral-100 
             w-full transition-all duration-500 ease-in ${
               open ? 'top-20' : 'top-[-490px]'
             }`}
          >
            {menu.map((item) => (
              <li
                key={item.id}
                className='text-xl font-bold whitespace-nowrap lg:ml-8 lg:my-0 my-7'
                onClick={open ? () => setOpen(!open) : null}
              >
                <Link
                  to={item.link}
                  className='rounded hover:border-solid border-2 hover:border-black duration-200 py-2 px-4'
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {user ? (
              <button
                onClick={(e) => signOut(e)}
                className=' flex items-center bg-blue-600 text-white font-bold font-[Poppins] py-2 px-6 rounded-lg lg:ml-8 hover:bg-blue-500 duration-500'
              >
                SAIR
                <FiLogOut className='ml-2 text-xl' />
              </button>
            ) : (
              <button
                onClick={(e) => signIn(e)}
                className=' flex items-center bg-blue-600 text-white font-bold font-[Poppins] py-2 px-6 rounded-lg lg:ml-8 hover:bg-blue-500 duration-500'
              >
                ENTRAR
                <FiLogIn className='ml-2 text-xl' />
              </button>
            )}
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
};
