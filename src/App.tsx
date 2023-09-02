// import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ItemCard } from './pages/ItemCard';

const App = () => {
  return (
    <div>
      <Header />

      {/* <div className="min-h-[75vh] p-4">
        <Outlet />
      </div> */}

      <ItemCard />

      <Footer />
    </div>
  );
};

export default App;
