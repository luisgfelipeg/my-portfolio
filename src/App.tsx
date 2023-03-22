import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Navbar } from './shared/components';
import { navLinks } from './shared/constants';
import ScrollToTop from './shared/hooks/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar menu={navLinks}>
        <AppRoutes />
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
