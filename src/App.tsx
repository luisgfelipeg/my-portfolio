import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Footer, Navbar } from './shared/components';
import { navLinks } from './shared/constants';
import ScrollToTop from './shared/hooks/ScrollToTop';

function App() {
  const [shortPage, setShortPage] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const isShortPage = window.innerHeight > document.body.clientHeight;
      setShortPage(isShortPage);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar menu={navLinks}>
        <AppRoutes />
        <Footer shortPage={shortPage} />
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
