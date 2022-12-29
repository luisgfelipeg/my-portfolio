import { useEffect, useState } from 'react';
import { FaRegSave } from 'react-icons/fa';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Input } from '../../../shared/components';
import { LayoutBase } from '../../../shared/layouts';

export function EditTasksToDo() {
  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const { task } = useParams<'task'>();
  const [users, setUsers] = useState<any>([]);
  const [nameToDo, setNameToDo] = useState<any>([]);

  function save() {
    users.map((name: any) => {
      if (name.nameToDo === id) {
        name.toDo.map((item: any) => {
          if (item.task === task) {
            item.task = nameToDo;
            localStorage.setItem('users', JSON.stringify(users));
          }
        });
        navigate(`/meus-projetos/to-do-list/${id}`);
      }
    });
  }

  useEffect(() => {
    const user = localStorage.getItem('users');
    if (user) {
      setUsers(JSON.parse(user));
      setNameToDo(task);
    }
  }, []);

  return (
    <LayoutBase>
      <div className='pt-24'>
        <div className={`flex flex-col`}>
          <div className='flex justify-between items-center mx-60 py-3 max-sm:mx-5'>
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
                save();
              }}
              className='text-blue-500 text-4xl'
            >
              <FaRegSave />
            </button>
          </div>
          <div className='flex flex-col max-w-full justify-center items-center'>
            <label className='text-white'>Tarefa:</label>
            {users.map((name: any) => {
              if (name.nameToDo === id)
                return (
                  <Input
                    key={name.id}
                    value={nameToDo}
                    onChange={(e: any) => setNameToDo(e.target.value)}
                    className='w-1/4'
                  />
                );
            })}
          </div>
          <ToastContainer style={{ top: '50px' }} />
        </div>
      </div>
    </LayoutBase>
  );
}
