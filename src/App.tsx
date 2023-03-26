import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Footer, Navbar } from './shared/components';
import { navLinks } from './shared/constants';
import ScrollToTop from './shared/hooks/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar menu={navLinks}>
        <AppRoutes />
        <Footer />
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
