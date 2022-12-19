import { useEffect, useState } from 'react';
import { ActionsList, Modal, Table } from '../../shared/components';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { LayoutBase } from '../../shared/layouts';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

export const ToDoList = () => {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [newToDo, setNewToDo] = useState<any>({ name: '', nameToDo: '' });
  const [users, setUsers] = useState<any>([]);
  const [feedBack, setFeedBack] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hiddenModal = () => {
    setShow(false);
    setNewToDo({ name: '', nameToDo: '' });
  };

  function addNewToDo() {
    users.push({ name: newToDo.name, nameToDo: newToDo.nameToDo });
    localStorage.setItem('users', JSON.stringify(users));
    const user = localStorage.getItem('users');
    if (user) {
      console.log(JSON.parse(user));
    }
    hiddenModal();
  }

  useEffect(() => {
    const users = localStorage.getItem('users');
    if (users) {
      setUsers(JSON.parse(users));
    }
  }, []);

  return (
    <LayoutBase>
      <div className='pt-24'>
        <Modal
          newToDo={newToDo}
          setNewToDo={setNewToDo}
          addNewToDo={addNewToDo}
          show={show}
          hiddenModal={hiddenModal}
        />
        <div className={`flex flex-col ${isLoading && 'items-center'}`}>
          <div className='flex justify-between items-center mx-20 py-3 max-sm:mx-5'>
            <h1>{null}</h1>
            <strong className='text-2xl max-sm:text-xl text-white'>
              <h1>Crie sua Lista de Tarefas</h1>
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
            titleColumn1='Criado Por:'
            titleColumn2='Nome da Lista'
            titleColumn3='Ações'
          >
            {users.map((user: any) => {
              return (
                <tr
                  key={user.name}
                  className='border-solid border-b border-neutral-300'
                >
                  <td className='py-3 max-sm:py-2'>
                    <Link
                      to={`/meus-projetos/to-do-list/${user.name}`}
                      className='cursor-pointer'
                    >
                      {user.name}
                    </Link>
                  </td>
                  <td className='py-3 max-sm:py-2'>
                    <a
                      onClick={() => {
                        console.log('teste');
                      }}
                      className='cursor-pointer'
                    >
                      {user.nameToDo}
                    </a>
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
