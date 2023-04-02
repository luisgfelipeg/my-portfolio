type LayoutBaseProps = {
  children: React.ReactNode;
};

export const LayoutBase = ({ children }: LayoutBaseProps) => {
  return <div className='mx-12 mt-8 flex-grow max-md:mx-2'>{children}</div>;
};
