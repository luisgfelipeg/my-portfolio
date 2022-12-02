import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Footer, Navbar } from './shared/components';

function App() {
  return (
    <BrowserRouter>
      <Navbar
        logo='LF'
        menu={[
          { menuItem: 'Página Inicial', menuLink: '/' },
          { menuItem: 'Projetos', menuLink: '/meus-projetos' },
        ]}
      >
        <AppRoutes />
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
