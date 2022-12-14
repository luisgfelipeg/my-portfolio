import { RiCheckboxBlankLine, RiCheckboxFill } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface ActionListProps {
  done?: () => void;
  edit?: () => void;
  complete?: boolean;
  removeToDo?: () => void;
}

export const ActionsList = ({
  done,
  complete,
  removeToDo,
  edit,
}: ActionListProps) => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center text-blue-500 gap-4 max-sm:gap-2 text-2xl max-sm:text-base'>
      <button onClick={() => edit!()}>
        <CiEdit />
      </button>
      <button onClick={() => done!()}>
        {complete ? <RiCheckboxFill /> : <RiCheckboxBlankLine />}
      </button>
      <button onClick={() => removeToDo!()}>
        <MdDeleteForever />
      </button>
    </div>
  );
};
