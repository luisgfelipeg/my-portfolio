import { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ActionsList, Modal, Table } from '../../../shared/components';
import { LayoutBase } from '../../../shared/layouts';

export const NewToDo = () => {
  const { id } = useParams<'id'>();

  const [show, setShow] = useState(false);
  const [newToDo, setNewToDo] = useState<any>({
    date: '',
    nameToDo: '',
    toDo: [],
  });
  const [users, setUsers] = useState<any>([]);

  function addNewToDo() {
    users.map((name: any) => {
      if (name.nameToDo === id) return name.toDo.push(newToDo.toDo);
      return undefined;
    });
    localStorage.setItem('users', JSON.stringify(users));
    const user = localStorage.getItem('users');
    if (user) {
      const test = JSON.parse(user);
      console.log(test);
    }
    hiddenModal();
  }

  const hiddenModal = () => {
    setShow(false);
    setNewToDo({ date: '', nameToDo: '', toDo: [] });
  };

  useEffect(() => {
    const users = localStorage.getItem('users');
    if (users) {
      const test = JSON.parse(users);
      console.log(test);
      setUsers(JSON.parse(users));
    }
  }, []);

  return (
    <LayoutBase>
      <div className='pt-24'>
        <Modal
          list
          iNameToDo='Nova Tarefa'
          newToDo={newToDo}
          setNewToDo={setNewToDo}
          addNewToDo={addNewToDo}
          show={show}
          hiddenModal={hiddenModal}
        />
        <div className={`flex flex-col`}>
          <div className='flex justify-between items-center mx-20 py-3 max-sm:mx-5'>
            <h1>{null}</h1>
            <strong className='text-2xl max-sm:text-xl text-white'>
              {
                <h1>
                  Lista de Tarefas:{' '}
                  {users.map((name: any) => {
                    if (name.nameToDo === id) return name.nameToDo;
                    return undefined;
                  })}
                </h1>
              }
            </strong>
            <button
              onClick={() => {
                setShow(true);
              }}
              className='text-blue-500 text-5xl'
            >
              <IoIosAddCircleOutline />
            </button>
          </div>
          <Table titleColumn1='Tarefas' titleColumn2='Ações'>
            {users.map((user: any) => {
              if (user.nameToDo === id)
                return user.toDo.map((task: any) => {
                  return (
                    <tr
                      key={user.nameToDo}
                      className='border-solid border-b border-neutral-300'
                    >
                      <td className='py-3 max-sm:py-2'>{task}</td>
                      <td className='py-3 max-sm:py-2'>{<ActionsList />}</td>
                    </tr>
                  );
                });
              return undefined;
            })}
          </Table>
          <ToastContainer style={{ top: '50px' }} />
        </div>
      </div>
    </LayoutBase>
  );
};
