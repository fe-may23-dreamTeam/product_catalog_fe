import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import CatalogPage from './pages/CatalogPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './components/ScrollToTop';
import FavouritesPage from './pages/FavouritesPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';

export const Root = () => (
  <BrowserRouter>
    <Toaster />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="phones" element={<Outlet />}>
          <Route index element={<CatalogPage />} />
          <Route path=":productId?" element={<ProductPage />} />
        </Route>
        <Route path="tablets" element={<Outlet />}>
          <Route index element={<CatalogPage />} />
          <Route path=":productId?" element={<ProductPage />} />
        </Route>
        <Route path="accessories" element={<Outlet />}>
          <Route index element={<CatalogPage />} />
          <Route path=":productId?" element={<ProductPage />} />
        </Route>
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
