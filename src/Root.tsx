import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import CatalogPage from './pages/CatalogPage';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { CartPage } from './pages/CartPage';

export const Root = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="phones" element={<CatalogPage />}>
          <Route path=":phoneId?" element={<h1>Phones Page</h1>} />
        </Route>
        <Route path="tablets">
          <Route path=":tabletId?" element={<h1>Tablets Page</h1>} />
        </Route>
        <Route path="accessories">
          <Route path=":accessoryId?" element={<h1>Accessories Page</h1>} />
        </Route>
        <Route path='cart' element={<CartPage /> } />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
