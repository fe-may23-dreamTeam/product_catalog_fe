import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Phones', path: 'phones' },
  { name: 'Tablets', path: 'tablets' },
  { name: 'Accessories', path: 'accessories' },
];

const App = () => {
  return (
    <div>
      <Header links={navLinks} />

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
