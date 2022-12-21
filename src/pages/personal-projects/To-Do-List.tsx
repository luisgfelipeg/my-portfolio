import { useEffect, useState } from 'react';
import { ActionsList, Modal, Table } from '../../shared/components';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { LayoutBase } from '../../shared/layouts';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

export const ToDoList = () => {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [newToDo, setNewToDo] = useState<any>({ date: '', nameToDo: '' });
  const [users, setUsers] = useState<any>([]);
  const [feedBack, setFeedBack] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hiddenModal = () => {
    setShow(false);
    setNewToDo({ date: '', nameToDo: '' });
  };

  function formatedDate() {
    const date = new Date();
    const day = date.getDate().toString();
    const dayF = day.length == 1 ? '0' + day : day;
    const month = (date.getMonth() + 1).toString();
    const monthF = month.length == 1 ? '0' + month : month;
    const yearF = date.getFullYear();
    return dayF + '/' + monthF + '/' + yearF;
  }

  function addNewToDo() {
    users.push({ date: formatedDate(), nameToDo: [newToDo.nameToDo] });
    localStorage.setItem('users', JSON.stringify(users));
    const user = localStorage.getItem('users');
    if (user) {
      const test = JSON.parse(user);
      console.log(test);
    }
    hiddenModal();
  }

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
            titleColumn1='Data'
            titleColumn2='Nome da Lista'
            titleColumn3='Ações'
          >
            {users.map((user: any) => {
              return (
                <tr
                  key={user.nameToDo}
                  className='border-solid border-b border-neutral-300'
                >
                  <td className='py-3 max-sm:py-2'>
                    <Link
                      to={`/meus-projetos/to-do-list/${user.date}`}
                      className='cursor-pointer'
                    >
                      {user.date}
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
