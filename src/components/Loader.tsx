import { FiSmartphone } from 'react-icons/fi';

export const Loader = () => {
  return (
    <div className="mt-52 m-auto flex place-content-center ">
      <FiSmartphone className="w-20 h-40 rounded-full animate-bounce text-accent" />
    </div>
  );
};
