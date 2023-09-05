import { Outlet } from 'react-router';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  useLocalStorage();

  return (
    <div>
      <Header />

      <div className="min-h-[75vh] bg-hover-bg p-4">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;
