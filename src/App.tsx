import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';


type PhoneProperties = { name: string; value: string }[];

export type PhoneInfo = {
  phoneImage: string;
  phoneTitle: string;
  phonePrice: string;
  discountPrice: string;
  phoneProperties: PhoneProperties;
  isAddedToCart: boolean;
  isFavorite: boolean;
};

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
