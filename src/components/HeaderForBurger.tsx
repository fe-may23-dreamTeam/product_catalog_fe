import { FiX } from 'react-icons/fi';

const HeaderForBurger = () => {
  return (
    <header className="h-12 border-b border-elements flex items-center justify-between">
      <a href="/" className="px-4">
        <img
          src={require('../assets/Logo.png')}
          alt="LogoPicture"
          className="w-16 h-6"
        />
      </a>
      <a href="/" className="p-1 flex items-center border-l border-elements">
        <div className="w-10 h-10 flex justify-center items-center">
          <FiX />
        </div>
      </a>
    </header>
  );
};

export default HeaderForBurger;
