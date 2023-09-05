import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useInitFavourites } from './hooks/useInitFavourites';
import { useInitialCart } from './hooks/useInitialCart';

const App = () => {
  useInitFavourites();
  useInitialCart();

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
