type LayoutBaseProps = {
  children: React.ReactNode;
};

export const LayoutBase = ({ children }: LayoutBaseProps) => {
  return <div className='mx-12 mt-8 flex-1'>{children}</div>;
};
