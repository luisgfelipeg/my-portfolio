import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Navbar } from './shared/components';
import ScrollToTop from './shared/hooks/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
