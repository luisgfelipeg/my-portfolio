import { RiCheckboxFill } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const ActionsList = ({}) => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center text-blue-500 gap-4 max-sm:gap-2 text-2xl'>
      <button onClick={() => navigate(`/edicao/`)}>
        <CiEdit />
      </button>
      <button>
        <RiCheckboxFill />
      </button>
      <button>
        <MdDeleteForever />
      </button>
    </div>
  );
};
