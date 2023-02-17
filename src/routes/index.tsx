import { Routes, Route } from 'react-router-dom';
import {
  EditToDo,
  Home,
  TasksToDoList,
  Projects,
  ToDoList,
  EditTasksToDo,
  BDC,
  Churrascometro,
} from '../pages';
import Contact from '../pages/Contact';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contato' element={<Contact />} />
      <Route path='/meus-projetos' element={<Projects />} />
      <Route path='/meus-projetos/binary-decimal-converter' element={<BDC />} />
      <Route path='/meus-projetos/to-do-list' element={<ToDoList />} />
      <Route path='/meus-projetos/to-do-list/:id' element={<TasksToDoList />} />
      <Route path='/meus-projetos/to-do-list/edit/:id' element={<EditToDo />} />
      <Route
        path='/meus-projetos/churrascometro'
        element={<Churrascometro />}
      />
      <Route
        path='/meus-projetos/to-do-list/edit/:id/:task'
        element={<EditTasksToDo />}
      />
    </Routes>
  );
};
