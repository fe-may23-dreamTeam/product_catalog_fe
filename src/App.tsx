import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

const App = () => {
  return (
    <div>
      <Header />

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
