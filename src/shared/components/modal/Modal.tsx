import { Button } from '../button/Button';
import { Input } from '../input/Input';

interface ModalProps {
  show: boolean;
  hiddenModal: () => void;
  addNewToDo: () => void;
  setNewToDo: (prev: Object) => void;
  newToDo: { nameToDo: string; toDo: string };
  iNameToDo: string;
  list?: boolean;
}

export const Modal = ({
  show,
  hiddenModal,
  setNewToDo,
  addNewToDo,
  newToDo,
  iNameToDo,
  list,
}: ModalProps) => {
  return (
    <div
      id='modal'
      className={`fixed top-0 left-0 flex justify-center items-center gap-2 w-screen h-screen bg-black/[0.80] ${
        !show && 'hidden'
      }`}
      onClick={(e) => {
        const target = e.target as HTMLTextAreaElement;
        if (target.id === 'modal') {
          hiddenModal();
        }
      }}
    >
      {list ? (
        <Input
          type='text'
          className='w-1/4'
          placeholder='Tarefa'
          value={newToDo.toDo}
          onChange={(e) =>
            setNewToDo((prev: Object) => ({ ...prev, toDo: e.target.value }))
          }
        />
      ) : (
        <>
          <Input
            type='text'
            className='w-1/4'
            placeholder={iNameToDo}
            value={newToDo.nameToDo}
            onChange={(e) =>
              setNewToDo((prev: Object) => ({
                ...prev,
                nameToDo: e.target.value,
              }))
            }
          />
          <Input
            type='text'
            className='w-1/4'
            placeholder='Primeira Tarefa'
            value={newToDo.toDo}
            onChange={(e) =>
              setNewToDo((prev: Object) => ({ ...prev, toDo: e.target.value }))
            }
          />
        </>
      )}
      <Button onClick={() => addNewToDo()}>ADD</Button>
    </div>
  );
};
