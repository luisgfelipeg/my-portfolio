import { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ActionsList, Modal, Table } from '../../../shared/components';
import { LayoutBase } from '../../../shared/layouts';

export const NewToDo = () => {
  const { id } = useParams<'id'>();

  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [newToDo, setNewToDo] = useState<any>({
    date: '',
    nameToDo: '',
    toDo: [],
  });
  const [users, setUsers] = useState<any>([]);

  function addNewToDo() {
    users.map((name: any) => {
      if (name.nameToDo === id) name.toDo.push([newToDo.toDo]);
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
          <Table
            titleColumn1='Data'
            titleColumn2='Tarefas'
            titleColumn3='Ações'
          >
            {users.map((user: any) => {
              return (
                <tr
                  key={user.nameToDo}
                  className='border-solid border-b border-neutral-300'
                >
                  <td className='py-3 max-sm:py-2'>{user.date}</td>
                  <td className='py-3 max-sm:py-2'>
                    {user.toDo.map((task: any) => {
                      return <td className='py-3 max-sm:py-2'>{task}</td>;
                    })}
                  </td>
                  <td className='py-3 max-sm:py-2'>{<ActionsList />}</td>
                </tr>
              );
            })}
          </Table>
          <ToastContainer style={{ top: '50px' }} />
        </div>
      </div>
    </LayoutBase>
  );
};
