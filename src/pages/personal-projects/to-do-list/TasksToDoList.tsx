import { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ActionsList, Footer, Modal, Table } from '../../../shared/components';
import { LayoutBase } from '../../../shared/layouts';

export function TasksToDoList() {
  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const [show, setShow] = useState(false);
  const [newToDo, setNewToDo] = useState<any>({
    nameToDo: '',
    toDo: [],
  });
  const [users, setUsers] = useState<any>([]);
  const [update, setUpdate] = useState<boolean>(false);

  function addNewToDo() {
    users.map((name: any) => {
      if (name.nameToDo === id)
        return name.toDo.push({ task: newToDo.toDo, done: false });
      return undefined;
    });
    localStorage.setItem('users', JSON.stringify(users));
    hiddenModal();
  }

  const hiddenModal = () => {
    setShow(false);
    setNewToDo({ date: '', nameToDo: '', toDo: [] });
  };

  function done(user: any, n: any) {
    const wichUser = users.indexOf(user);
    const wichTask = users[wichUser].toDo.indexOf(n);
    if (n.done === false) {
      users[wichUser].toDo[wichTask].done = true;
    } else {
      users[wichUser].toDo[wichTask].done = false;
    }
    localStorage.setItem('users', JSON.stringify(users));
    setUpdate((prev: boolean) => !prev);
  }

  function removeToDo(user: any, n: any) {
    const wichUser = users.indexOf(user);
    const wichTask = users[wichUser].toDo.indexOf(n);
    users[wichUser].toDo.splice(wichTask, 1);
    localStorage.setItem('users', JSON.stringify(users));
    setUpdate((prev: boolean) => !prev);
  }

  useEffect(() => {
    const users = localStorage.getItem('users');
    if (users) {
      setUsers(JSON.parse(users));
    }
  }, [update]);

  return (
    <div className='relative min-h-screen flex flex-col'>
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
            <div className='flex justify-between items-center mx-60 py-3 max-2xl:mx-32 max-lg:mx-20 max-md:mx-10 max-sm:mx-2'>
              <button
                onClick={() => {
                  navigate('/meus-projetos/to-do-list');
                }}
                className='text-blue-500 text-5xl'
              >
                <IoArrowBackCircleOutline />
              </button>
              <strong className='text-2xl max-sm:text-xl text-white'>
                {
                  <h1>
                    Lista de Tarefa:{' '}
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
                        key={Math.floor(Math.random() * 65536)}
                        className='border-solid border-b border-neutral-300'
                      >
                        <td
                          className={`py-3 max-sm:py-2 ${
                            task.done && 'line-through'
                          }`}
                        >
                          {task.task}
                        </td>
                        <td className='py-3 max-sm:py-2'>
                          {
                            <ActionsList
                              done={() => done(user, task)}
                              complete={task.done}
                              removeToDo={() => removeToDo(user, task)}
                              edit={() =>
                                navigate(
                                  `/meus-projetos/to-do-list/edit/${user.nameToDo}/${task.task}`
                                )
                              }
                            />
                          }
                        </td>
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
      <Footer shortPage />
    </div>
  );
}
