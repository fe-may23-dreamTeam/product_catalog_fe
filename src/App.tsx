import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />

      <div className="min-h-[75vh] p-4">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;
