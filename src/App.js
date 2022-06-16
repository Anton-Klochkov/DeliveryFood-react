import { Routes, Route } from 'react-router-dom';

import MainPage from './page/MainPage/MainPage';
import AuthPage from './page/AuthPage/AuthPage';
import OrderPage from './page/OrderPage/OrderPage';

import { Layout } from './Layout/Layout';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="order-page" element={<OrderPage />} />
        <Route path="*" element={<p>NotFoundPage</p>} />
      </Route>
    </Routes>
  );
}

export default App;
