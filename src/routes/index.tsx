import { Routes, Route } from 'react-router-dom';
import { Home, NewToDo, Projects, ToDoList } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/meus-projetos' element={<Projects />} />
      <Route path='/meus-projetos/to-do-list' element={<ToDoList />} />
      <Route path='/meus-projetos/to-do-list/:id' element={<NewToDo />} />
    </Routes>
  );
};
