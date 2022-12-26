import { useEffect, useState } from 'react';
import { ActionsList, Modal, Table } from '../../../shared/components';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { LayoutBase } from '../../../shared/layouts';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

export const ToDoList = () => {
  const [show, setShow] = useState(false);
  const [newToDo, setNewToDo] = useState<any>({
    nameToDo: '',
    toDo: '',
    id: 0,
    done: false,
  });
  const [users, setUsers] = useState<any>([]);
  const [id, setId] = useState<number>(0);
  const [update, setUpdate] = useState<boolean>(false);

  const hiddenModal = () => {
    setShow(false);
    setNewToDo({ date: '', nameToDo: '', toDo: [''] });
  };

  function formatedDate() {
    const date = new Date();
    const day = date.getDate().toString();
    const dayF = day.length === 1 ? '0' + day : day;
    const month = (date.getMonth() + 1).toString();
    const monthF = month.length === 1 ? '0' + month : month;
    const yearF = date.getFullYear();
    return dayF + '/' + monthF + '/' + yearF;
  }

  function addNewToDo() {
    setId((prev: number) => prev + 1);
    users.push({
      date: formatedDate(),
      nameToDo: newToDo.nameToDo,
      toDo: [newToDo.toDo],
      id: id,
      done: false,
    });
    localStorage.setItem('users', JSON.stringify(users));
    hiddenModal();
  }

  function done(user: any) {
    const wich = users.indexOf(user);
    if (users[wich].done === false) {
      users[wich].done = true;
    } else {
      users[wich].done = false;
    }
    localStorage.setItem('users', JSON.stringify(users));
    setUpdate((prev: boolean) => !prev);
  }

  useEffect(() => {
    const existsUsers = localStorage.getItem('users');
    if (existsUsers) {
      setUsers(JSON.parse(existsUsers));
    }
  }, [update]);

  return (
    <LayoutBase>
      <div className='pt-24'>
        <Modal
          iNameToDo='Nome da Lista'
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
            titleColumn1='Data'
            titleColumn2='Nome da Lista'
            titleColumn3='Ações'
          >
            {users.map((user: any) => {
              return (
                <tr
                  key={user.id}
                  className='border-solid border-b border-neutral-300'
                >
                  <td
                    className={`py-3 max-sm:py-2 ${
                      user.done && 'line-through'
                    }`}
                  >
                    {user.date}
                  </td>
                  <td
                    className={`py-3 max-sm:py-2 ${
                      user.done && 'line-through'
                    }`}
                  >
                    <Link
                      to={`/meus-projetos/to-do-list/${user.nameToDo}`}
                      className='cursor-pointer'
                    >
                      {user.nameToDo}
                    </Link>
                  </td>
                  <td className='py-3 max-sm:py-2'>
                    {
                      <ActionsList
                        done={() => done(user)}
                        complete={user.done}
                      />
                    }
                  </td>
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
