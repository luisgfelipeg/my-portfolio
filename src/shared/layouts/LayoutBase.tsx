type LayoutBaseProps = {
  children: React.ReactNode;
  spreadFooter?: boolean;
};

export const LayoutBase = ({ children, spreadFooter }: LayoutBaseProps) => {
  return (
    <div
      className={`mx-12 mt-8 flex-grow max-md:mx-2 ${
        spreadFooter ? 'mb-20' : ''
      }`}
    >
      {children}
    </div>
  );
};
