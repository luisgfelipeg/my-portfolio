interface RowProps {
  icon: string;
  title: string;
  first?: boolean;
}

export const Row: React.FC<RowProps> = ({ icon, title, first }) => {
  return (
    <div className={`flex gap-2 ${first ? 'mt-0' : 'mt-8'}`}>
      <img src={icon} className='text-sky-300 mt-1 w-5 h-5' />
      <p className='text-white font-bold text-lg'>{title}</p>
    </div>
  );
};
