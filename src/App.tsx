import { Outlet } from 'react-router';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import toast from 'react-hot-toast';
import { FiAlertTriangle } from 'react-icons/fi';

const App = () => {
  useLocalStorage();

  const { user } = useAuth0();

  useEffect(() => {
    if (user && !user.email_verified) {
      toast('Verify your email', {
        icon: <FiAlertTriangle color="orange" />,
      });
    }
  }, [user]);

  return (
    <div>
      <Header />

      <div className="min-h-[82vh] bg-hover-bg-light dark:bg-hover-bg-dark">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;
