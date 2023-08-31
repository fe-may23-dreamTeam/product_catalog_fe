import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

const navLinks = ['Home', 'Phones', 'Tablets', 'Accessories'];

const App = () => {
  return (
    <div>
      <Header navLinks={navLinks} />

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
