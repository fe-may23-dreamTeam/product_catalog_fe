import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useInitFavourites } from './hooks/useInitFavourites';

const App = () => {
  useInitFavourites();

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
