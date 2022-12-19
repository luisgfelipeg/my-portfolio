import { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className='hover:text-slate-900 hover:bg-white duration-300 bg-blue-900 p-2 rounded-2xl text-white active:scale-95 active:duration-200'
    >
      {children}
    </button>
  );
};
