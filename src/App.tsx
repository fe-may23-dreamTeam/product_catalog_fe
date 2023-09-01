import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Pagination from './components/Pagination';

const App = () => {
  return (
    <div>
      <Header />

      <div className="min-h-[75vh] p-4">
        <Outlet />
        <Pagination
          total={10}
          perPage={2}
          currentPage={1}
          onPageChange={() => {}}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
