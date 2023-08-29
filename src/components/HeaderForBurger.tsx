const HeaderForBurger = () => {
  return (
    <header className="h-12 border-b border-custom-border flex items-center justify-between">
      <a href="/" className="px-4">
        <img
          src={require('../assets/Logo.png')}
          alt="LogoPicture"
          className="w-16 h-6"
        />
      </a>
      <a href="/" className="p-1 flex items-center border-l border-custom-border">
        <div className="w-10 h-10 flex justify-center items-center">
          <img
            src={require('../assets/Close.jpg')}
            alt="CloseButton"
            className="w-4 h-4"
          />
        </div>
      </a>
    </header>
  );
};

export default HeaderForBurger;
