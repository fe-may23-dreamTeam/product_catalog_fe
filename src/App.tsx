// import { Card } from './components/Card';
import { ItemCard } from './pages/ItemCard';

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

// const phoneInfo: PhoneInfo = {
//   phoneImage: require('./assets/images/iphone11.png'),
//   phoneTitle: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
//   phonePrice: '$899',
//   discountPrice: '$859',
//   phoneProperties: [
//     { name: 'Screen', value: '6.1” OLED' },
//     { name: 'Capacity', value: '128 GB' },
//     { name: 'RAM', value: '6 GB' },
//   ],
//   isAddedToCart: false,
//   isFavorite: false,
// };

const App = () => {
  return (
    <div>
      {/* <Card phoneInfo={phoneInfo} /> */}
      <ItemCard/>
    </div>
  );
};

export default App;
