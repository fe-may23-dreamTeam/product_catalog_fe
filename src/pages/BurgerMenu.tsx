import HeaderForBurger from '../components/HeaderForBurger';
import { FiShoppingBag, FiHeart } from 'react-icons/fi';

const BurgerMenu = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderForBurger />

      <main className="flex-grow mt-6">
        <a
          href="/tablets"
          className="block py-2 mt-4 leading-tight text-center text-secondary text-xs uppercase tracking-widest transition-colors hover:text-primary"
        >
          <p className="whitespace-nowrap">home</p>
        </a>
        <a
          href="/tablets"
          className="block py-2 mt-4 leading-tight text-center text-secondary text-xs uppercase tracking-widest transition-colors hover:text-primary"
        >
          <p className="whitespace-nowrap">phones</p>
        </a>
        <a
          href="/tablets"
          className="block py-2 mt-4 leading-tight text-center text-secondary text-xs uppercase tracking-widest transition-colors hover:text-primary"
        >
          <p className="whitespace-nowrap">tablets</p>
        </a>
        <a
          href="/accessories"
          className="block py-2 mt-4 leading-tight text-center text-secondary text-xs uppercase tracking-widest transition-colors hover:text-primary"
        >
          <p className="whitespace-nowrap">accessories</p>
        </a>
      </main>

      <footer className="flex justify-between">
        <a
          href="/liked"
          className="w-1/2 h-16 border border-elements flex items-center justify-center relative group transition-opacity duration-300"
        >
          <FiHeart />
          <span className="absolute w-full h-0.5 bg-primary bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
        <a
          href="/shopping-cart"
          className="w-1/2 h-16 border border-elements flex items-center justify-center relative group transition-opacity duration-300"
        >
          <FiShoppingBag />
          <span className="absolute w-full h-0.5 bg-primary bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </footer>
    </div>
  );
};

export default BurgerMenu;
