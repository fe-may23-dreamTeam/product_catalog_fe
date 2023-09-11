import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { ItemCounter } from '../components/ItemCounter';
import { useAppSelector } from '../redux';

const BurgerMenu = () => {
  const { favouriteItems } = useAppSelector((state) => state.favourites);
  const { items } = useAppSelector((state) => state.cart);

  return (
    <div className="fixed inset-0 top-12 z-50 bg-white -translate-x-full peer-checked/nav:-translate-x-0 duration-300 flex justify-between flex-col ">
      <main className="flex-grow mt-6">
        <NavLink
          to="/"
          className="block py-2 mt-4 leading-tight text-center text-secondary text-xs uppercase tracking-widest transition-colors hover:text-primary"
        >
          <p className="whitespace-nowrap">home</p>
        </NavLink>
        <NavLink
          to="/phones"
          className="block py-2 mt-4 leading-tight text-center text-secondary text-xs uppercase tracking-widest transition-colors hover:text-primary"
        >
          <p className="whitespace-nowrap">phones</p>
        </NavLink>
        <NavLink
          to="/tablets"
          className="block py-2 mt-4 leading-tight text-center text-secondary text-xs uppercase tracking-widest transition-colors hover:text-primary"
        >
          <p className="whitespace-nowrap">tablets</p>
        </NavLink>
        <NavLink
          to="/accessories"
          className="block py-2 mt-4 leading-tight text-center text-secondary text-xs uppercase tracking-widest transition-colors hover:text-primary"
        >
          <p className="whitespace-nowrap">accessories</p>
        </NavLink>
      </main>

      <footer className="flex justify-between">
        <NavLink
          to="/favourites"
          className="w-1/2 h-16 border border-elements flex items-center justify-center relative group transition-opacity duration-300"
        >
          <FiHeart />
          <ItemCounter count={favouriteItems.length} />
          <span className="absolute w-full h-0.5 bg-primary bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </NavLink>
        <NavLink
          to="/cart"
          className="w-1/2 h-16 border border-elements flex items-center justify-center relative group transition-opacity duration-300"
        >
          <FiShoppingBag />
          <ItemCounter count={items.length} />
          <span className="absolute w-full h-0.5 bg-primary bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </NavLink>
      </footer>
    </div>
  );
};

export default BurgerMenu;
