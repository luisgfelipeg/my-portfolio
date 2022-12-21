import { Button } from '../button/Button';
import { Input } from '../input/Input';

interface ModalProps {
  show: boolean;
  hiddenModal: () => void;
  addNewToDo: () => void;
  setNewToDo: (prev: Object) => void;
  newToDo: { name: string; nameToDo: string };
}

export const Modal = ({
  show,
  hiddenModal,
  setNewToDo,
  addNewToDo,
  newToDo,
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
      <Input
        type='text'
        className='w-1/4'
        placeholder='Nome da Lista'
        value={newToDo.nameToDo}
        onChange={(e) => {
          setNewToDo((prev: Object) => ({ ...prev, nameToDo: e.target.value }));
        }}
      />
      <Button onClick={() => addNewToDo()}>ADD</Button>
    </div>
  );
};
