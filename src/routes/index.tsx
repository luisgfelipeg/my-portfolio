import { Routes, Route } from 'react-router-dom';
import { Home, Projects, ToDoList } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/meus-projetos' element={<Projects />} />
      <Route path='/meus-projetos/to-do-list' element={<ToDoList />} />
    </Routes>
  );
};
