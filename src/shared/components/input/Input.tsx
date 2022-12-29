import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorInput?: boolean | undefined;
  className?: string | undefined;
}

export const Input = ({ className, errorInput, ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className={`border-solid ${
        errorInput ? 'border-red-600' : 'border-blue-600'
      } py-2 px-3 border-2 rounded-2xl focus:placeholder:opacity-0 
          focus:placeholder:transition-opacity focus:placeholder:duration-700 ${
            errorInput && 'placeholder:text-red-600'
          } ${className}`}
    />
  );
};
