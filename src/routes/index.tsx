import { Routes, Route } from 'react-router-dom';
import { Home, Projects } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/meus-projetos' element={<Projects />} />
    </Routes>
  );
};
