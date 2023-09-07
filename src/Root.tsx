import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import App from './App';
import CatalogPage from './pages/CatalogPage';
import NotFound from './pages/NotFound';
import { ProductPage } from './pages/ProductPage';
import ScrollToTop from './components/ScrollToTop';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';

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
          <Route path=":product?" element={<ProductPage />} />
        </Route>
        <Route path="tablets">
          <Route path=":tabletId?" element={<CatalogPage />} />
        </Route>
        <Route path="accessories">
          <Route path=":accessoryId?" element={<CatalogPage />} />
        </Route>
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
