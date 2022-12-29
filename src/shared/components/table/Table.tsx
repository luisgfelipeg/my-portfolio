interface TableProps {
  titleColumn1?: string;
  titleColumn2?: string;
  titleColumn3?: string;
  titleColumn4?: string;
  titleColumn5?: string;
  children: React.ReactNode;
  className?: string;
}

export const Table = ({
  titleColumn1,
  titleColumn2,
  titleColumn3,
  titleColumn4,
  titleColumn5,
  children,
  className,
}: TableProps) => {
  return (
    <table
      className={`shadow-md shadow-indigo-100 styled-table mb-8 mx-60 ${className}`}
    >
      <thead className='bg-blue-900 text-white text-center text-xl max-sm:text-base border-solid border-b border-neutral-300'>
        <tr>
          {titleColumn1 && <th className='py-4 max-sm:py-2'>{titleColumn1}</th>}
          {titleColumn2 && <th className='py-4 max-sm:py-2'>{titleColumn2}</th>}
          {titleColumn3 && <th className='py-4 max-sm:py-2'>{titleColumn3}</th>}
          {titleColumn4 && <th className='py-4 max-sm:py-2'>{titleColumn4}</th>}
          {titleColumn5 && <th className='py-4 max-sm:py-2'>{titleColumn5}</th>}
        </tr>
      </thead>
      <tbody className='text-center text-lg max-sm:text-base text-white'>
        {children}
      </tbody>
    </table>
  );
};
