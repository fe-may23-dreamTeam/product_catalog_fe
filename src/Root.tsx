import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';

export const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="phones">
          <Route path=":phoneId?" element={<h1>Phones Page</h1>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
